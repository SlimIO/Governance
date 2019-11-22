"use strict";

require("dotenv").config();
require("make-promises-safe");

// Require Node.js Dependencies
const { join } = require("path");
const { writeFile, appendFile } = require("fs").promises;

// Require Third-party Dependencies
const { fetch } = require("fetch-github-repositories");
const { get } = require("httpie");

// CONSTANTS
const GITHUB_ORGA = "SlimIO";
const GITHUB_TOKEN = process.env.GIT_TOKEN;
const FILE_NAME = join(__dirname, "docs", "project_status.md");

async function getTomlType(repoName) {
    try {
        const URL = `https://raw.githubusercontent.com/${GITHUB_ORGA}/${repoName}/master/slimio.toml`;
        const { data } = await get(URL);

        const dataMatching = /type\s?=\s?"([A-Za-z]+)"/g.exec(data);
        if (dataMatching === null) {
            return null;
        }

        return dataMatching[1];
    }
    catch (error) {
        return null;
    }
}

async function main() {
    console.time("fetchRepos");
    const repos = await fetch(GITHUB_ORGA, {
        kind: "orgs",
        token: GITHUB_TOKEN,
        agent: GITHUB_ORGA
    });
    console.timeEnd("fetchRepos");
    console.log(`Successfully fetched ${repos.length} repositories!`);

    const kinds = new Map();
    for (const { name, description, html_url, archived } of repos) {
        if (archived) {
            continue;
        }

        const type = await getTomlType(name);
        if (type === null) {
            continue;
        }

        const package_file = "https://raw.githubusercontent.com/" + GITHUB_ORGA + "/" + name + "/master/package.json";
        const project_version = `![version](https://img.shields.io/badge/dynamic/json.svg?url=${package_file}&query=$.version&label=)`;
        const node_version = `![version](https://img.shields.io/badge/dynamic/json.svg?url=${package_file}&query=$.engines.node&label=)`;
        const dependencies = `![dependencies](https://img.shields.io/david/SlimIO/${name})`;

        const repo = { name, description, project_version, node_version, dependencies, html_url };
        if (kinds.has(type)) {
            kinds.get(type).push(repo);
        } else {
            kinds.set(type, [repo]);
        }
    }

    // Creation du fichier
    await writeFile(FILE_NAME, "# Module Status\n\n");
    console.log(`file ${FILE_NAME} create`);

    for (const [type, repos] of kinds.entries()) {
        await appendFile(FILE_NAME, "\n## " + type + "\n\nNom | Description | Version | Node | Dependencies\n --- | ---\ | :-: | :-: | :-:\n");

        for (const { name, html_url, description, project_version, node_version, dependencies } of repos) {
            const updDesc = description.length > 40 ? `${description.slice(0, 37)}...` : description;
            await appendFile(FILE_NAME, `[${name}](${html_url}) | ${updDesc} | ${project_version} | ${node_version} | ${dependencies}\n`);
        }
    }
}
main().catch(console.error);
