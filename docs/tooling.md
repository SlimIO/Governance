# SlimIO Tools
This documentation aims to describe all the tools we use on SlimIO. All the tools below have been developed **by members of SlimIO**.

| name | description |
| --- | --- |
| [dep-updater](https://github.com/fraxken/dep-updater) | CLI to update the dependencies of a project for you |
| [publish-preview](https://github.com/fraxken/publish-preview) | Preview of properties and files that will be published on the NPM registry |
| [Sync](https://github.com/SlimIO/Sync) | Pull, Update and track Node.js projects state (outdated, psp policies...) |
| [Markdown-Dependencies](https://github.com/SlimIO/Markdown-Dependencies) | Create and/or Update the 'Dependencies' section in README.md |
| [Generator](https://github.com/SlimIO/Generator) | Generate a SlimIO project from scratch |
| [Dependency-Analyser](https://github.com/SlimIO/Dependency-Analyser) | Draw a network of all SlimIO Projects |
| [Documentation](https://github.com/SlimIO/documentation) | Generate real-time documentation for projects |
| [PSP](https://github.com/SlimIO/psp) | Check a given project against our policies |
| [Manifest](https://github.com/SlimIO/Manifest) | To manage and understood manifest (**slimio.toml**) file |

## Manifest

One of the first thing to understood in SlimIO is the role of our manifest file **slimio.toml**. We decided to create our own file because of the big quantity of internal tools we have and because of what goal SlimIO want to achieve (For example the manifest is useful for Addons to get informations on how we have to compile or install dependencies).

Content example:

```toml
name = "Manifest"
version = "0.7.1"
type = "Package"

[doc]
include=['index.js']
```
