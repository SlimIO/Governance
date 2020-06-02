# SlimIO Tools
This documentation aims to describe all the tools we use on SlimIO. All the tools below have been developed **by members of SlimIO**. Each repositories have complete description to dig the subject (so dont hesitate to follow each links to learn more).

| name | description |
| --- | --- |
| [Sync](https://github.com/SlimIO/Sync) | Pull, Update and track Node.js projects state (outdated, psp policies...) |
| [Markdown-Dependencies](https://github.com/SlimIO/Markdown-Dependencies) | Create and/or Update the 'Dependencies' section in README.md |
| [Generator](https://github.com/SlimIO/Generator) | Generate a new SlimIO project |
| [Dependency-Analyser](https://github.com/SlimIO/Dependency-Analyser) | Draw a network of all SlimIO Projects with their direct dependencies |
| [DevDocs](https://github.com/SlimIO/devdocs) | Generate real-time dev-documentation for projects (it use jsdoc under the hood) |
| [PSP](https://github.com/SlimIO/psp) | Check a given project files and structure against our policies |
| [Manifest](https://github.com/SlimIO/Manifest) | To read/write/manage our manifest (**slimio.toml**) file |
| [Security](https://github.com/SlimIO/Security) | Analyze and detect security issues in SlimIO repositories with Nsecure |
| [Registry](https://github.com/SlimIO/Registry) | Addon registry (like npm but for SlimIO addons and modules) |
| [Statusboard](https://github.com/SlimIO/statusboard) | Open-source statusboard, online version for SlimIO [here](https://slimio-statusboard.herokuapp.com/) |

Following packages are useful but not part of the SlimIO tools.

| name | description |
| --- | --- |
| [Dep-updater](https://github.com/fraxken/dep-updater) | CLI to update the npm dependencies of a project for you |
| [Publish-preview](https://github.com/fraxken/publish-preview) | Preview of properties and files that will be published on the NPM 

## Manifest

The manifest (the **slimio.toml** file at the root of each projects) is useful when we need to describe specific behaviors and settings in our internals tools or to our global product. Some examples are:

- To create [Addon archive](https://github.com/SlimIO/Bundler) the right way with the right parameters.
- To the [CLI](https://github.com/SlimIO/CLI) to known the current addon dependencies (like npm).
- To disable given [psp](https://github.com/SlimIO/psp) warnings (like eslint when you disable a rule).
- To configure and include the list of files we want for our [Documentation](https://github.com/SlimIO/documentation) tool.
- To allow [Sync](https://github.com/SlimIO/Sync) to easily track and find information about our projects.

Some might bring the question of why creating a dedicated manifest. The answer is simple: We did not want to add more keys and complexity to the package.json and bring a clean concern separation.

Manifest example (from the [Manifest](https://github.com/SlimIO/Manifest) project himself).

```toml
name = "Manifest"
version = "0.7.1"
type = "Package"

[doc]
include=['index.js']
```

SlimIO projects are described with many types (mainly for psp warnings). These types are described [here](https://github.com/SlimIO/Manifest#available-types). In the example below we can see that we ask our documentation tool to only consider and handle the `index.js` file.

Another example of manifest

```toml
name = "windrive"
version = "1.5.0"
platform = "Windows"
type = "NAPI"
```

N-API projects can target a given platform. It is rather useful for our tooling but also for later manage smarter archive mechanism.

## Environment Variables

Most of our tooling are CLI that need **access token** for NPM and/or GITHUB. If you dont known how to find these tokens for both of these platforms, please follow these guides:

- [github - Creating a personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
- [npm - Creating and viewing authentication tokens](https://docs.npmjs.com/creating-and-viewing-authentication-tokens)

The next step is to create two Environment Variables `GIT_TOKEN` and `NPM_TOKEN` where the values are your tokens. If you dont known how to achieve that on your systems, these following guides may help you:

- [How to set the path and environment variables in Windows](https://www.computerhope.com/issues/ch000549.htm)
- [Environment Variables in Linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps)
- [Share Environment Vars between WSL and Windows](https://devblogs.microsoft.com/commandline/share-environment-vars-between-wsl-and-windows/)

## Cloning all SlimIO projects

> ⚠️ Node.js and GIT must be installed on your system.

To clone all repositories you will need to download and set up [Sync](https://github.com/SlimIO/Sync#getting-started). Then prepare a proper SlimIO repository where all the SlimIO projects will be stored !

```bash
$ mkdir SlimIO
$ cd SlimIO
```

And then run the following psync command:
```bash
$ psync install --noinstall
```

The `--noinstall` avoid to install npm dependencies on all projects. In you want all projects to have their node_modules ready, then remove this argument.

> 👀 For more information please check the Sync documentation.
