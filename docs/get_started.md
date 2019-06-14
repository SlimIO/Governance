# SlimIO Starter Guide

## Requirements

- [Node.js](https://nodejs.org/en/) version 10 or higher.
- [Git](https://git-scm.com/) (**for manual installation**).
- [SlimIO CLI](https://github.com/SlimIO/CLI)

> ⚠️ Node.js must be installed first to get access to npm.

To setup the SlimIO CLI with **npm** just run in your terminal:
```bash
$ npm install @slimio/cli -g
```

## Manual installation
For anyone who want to known how to setup an Agent without the help of the CLI.. follow the [Getting Started](https://github.com/SlimIO/Agent#getting-started) on the Agent repository.

This repository describe how work **Agent** and list **all his components** (must be useful if you want to dig deeper).

## Getting Started
To setup a basic agent just run the following command at the location where you want the agent to be installed:

```bash
$ cd directoryWhereYouWantToInstall
$ slimio init
```

The CLI will then install the **complete agent** (which include five **built-in** addon).

<p align="center">
<img src="https://cdn.discordapp.com/attachments/359783689040953354/583392486077104142/install.gif" width="650">
</p>

The command can be customised to choose the directory name and eventually initialize with additionals addons (for example to install **ihm**, **prism** etc..). Addons must be separated by **comma**.

```bash
$ slimio init dirName --add ihm,prism
```

---

Now that your agent is installed you can launch it with
```bash
$ npm start
```

## Add addon
If you want to install additional addons, just go to the root of the agent and run following command:

```bash
$ cd Agent
$ slimio add cpu-addon
# Or use the github URL
$ slimio add https://github.com/SlimIO/cpu-addon
```

By default all addon(s) are writted as active in **agent.json**.
```json
{
    "addons": {
        "cpu": {
            "active": true, // <-- active by default
            "standalone": false
        }
    }
}
```

> Note: for more information on agent.json fields, check [Agent configuration](https://github.com/SlimIO/Agent#agent-configuration)

If you want to add as disabled by default use the `-d` option.

```bash
$ slimio add -d cpu-addon
```

## Agent configuration
TBC
