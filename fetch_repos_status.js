"use strict";

require("dotenv").config();
require("make-promises-safe");

// Require Third-party Dependencies
const { fetch } = require("fetch-github-repositories");
const { get } = require("httpie");
const fs = require("fs");

// CONSTANTS
const GITHUB_ORGA = "SlimIO";
const GITHUB_TOKEN = process.env.GIT_TOKEN;

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

    const filename = "project_status.md";

    console.time("fetchRepos");
    const repos = await fetch(GITHUB_ORGA, {
        kind: "orgs",
        token: GITHUB_TOKEN,
        agent: GITHUB_ORGA
    });
    console.timeEnd("fetchRepos");

    const projectsInformation = [];
    const kinds = new Map([]);
    
    for (const { name, description, html_url, archived } of repos) {

	const repo_name = html_url.replace("https://github.com/" + GITHUB_ORGA + "/", "");    
	const package_file = "https://raw.githubusercontent.com/" + GITHUB_ORGA + "/" + repo_name + "/master/package.json";
	const project_version = `![version](https://img.shields.io/badge/dynamic/json.svg?url=${package_file}&query=$.version&label=Version)`;
	const node_version = `![version](https://img.shields.io/badge/dynamic/json.svg?url=${package_file}&query=$.engines.node&label=Node)`;
	const dependencies = `![dependencies](https://img.shields.io/david/SlimIO/${repo_name})`;

	const repo = {name, description, project_version, node_version, dependencies};
	
	if (archived) {
		continue;
	}
	
	const type = await getTomlType(repo_name);
	if (type === null) {
		continue; 
	}

	if (kinds.has(type)) {
		kinds.get(type).push(repo);
	} else {
		kinds.set(type, [repo]);	
	}
    }

    // Creation du fichier
    fs.writeFile(filename, "# Module Status\n\n", function (err) {
        if (err) throw err;
        console.log(`file ${filename} create`);
    });

    for (const [type, repos] of kinds.entries()){
	fs.appendFile(filename, "## " + type + "\n\nNom | Description | Version | Node | Dependencies\n :-: | :-: | :-: | :-: | :-:\n", function (err) {
            if (err) throw err;
        });

    	for (const {name, description, project_version, node_version, dependencies} of repos) {
	    fs.appendFile(filename, `**${name}** | ${description} | ${project_version} | ${node_version} | ${dependencies}\n`, function (err) {
                if (err) throw err;
            });
	}
    }
}
main().catch(console.error);
