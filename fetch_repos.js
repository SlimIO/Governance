"use strict";

require("dotenv").config();
require("make-promises-safe");

// Require Third-party Dependencies
const { fetch } = require("fetch-github-repositories");
const { get } = require("httpie");
const clipboardy = require("clipboardy");
const { taggedString } = require("@slimio/utils");

// CONSTANTS
const GITHUB_ORGA = "SlimIO";
const GITHUB_TOKEN = process.env.GIT_TOKEN;
const VERBOSE = false;
const DETAILS_TPL = taggedString`<details><summary>${"title"}</summary>\n\n${"description"}\n${"content"}\n</details>\n\n`;
const PROJECT_TPL = taggedString`- [${0}](${1}) - ${2}\n`;
const KINDS_DESC = {
    Addon: "SlimIO Addons",
    NAPI: "Node.js Native bindings writted in C/C++",
    CLI: "Command Line Interface packages/projects",
    Package: "Classical 'npm' packages",
    Service: "Web API projects",
    Degraded: "Projects that are not matching our psp policies"
};

/**
 * @async
 * @function getTomlType
 * @description Request slimio.toml remote repos and search NAPI project
 * @param {string} repoName github repository name
 * @returns {Promise<string | null>}
 */
async function getTomlType(repoName) {
    try {
        const URL = `https://raw.githubusercontent.com/${GITHUB_ORGA}/${repoName}/master/slimio.toml`;
        const { data } = await get(URL, {
            headers: {
                "User-Agent": GITHUB_ORGA,
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3.raw"
            }
        });

        const dataMatching = /type\s?=\s?"([A-Za-z]+)"/g.exec(data);
        if (dataMatching === null) {
            return null;
        }

        return dataMatching[1];
    }
    catch (error) {
        if (VERBOSE) {
            console.error(error);
        }

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

    console.log("\n > Search for all .toml types!");

    /** @type {Map<string, any[]>} */
    const kinds = new Map([
        ["archived", []]
    ]);

    for (const { name, description, html_url, archived } of repos) {
        const repo = { name, description, html_url };
        console.log(`process repo: ${name}, url: ${html_url}`);

        if (archived) {
            kinds.get("archived").push(repo);
            continue;
        }

        const type = await getTomlType(repo.name);
        if (type === null) {
            continue;
        }

        if (kinds.has(type)) {
            kinds.get(type).push(repo);
        }
        else {
            kinds.set(type, [repo]);
        }
    }

    let str = `## Available Repositories\nThe following section contains all SlimIO packages and projects splited by their roles.\n\n`;
    for (const [name, repos] of kinds.entries()) {
        let content = "";
        for (const { name, html_url, description } of repos) {
            content += PROJECT_TPL(name, html_url, description);
        }

        const description = Reflect.has(KINDS_DESC, name) ? KINDS_DESC[name] : "TBC";
        str += DETAILS_TPL({ title: name, description, content });
    }
    str | 0;
    clipboardy.writeSync(str);
    console.log(" > Markdown copied");
}
main().catch(console.error);
