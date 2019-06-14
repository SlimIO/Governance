# Create your first SlimIO Addon

## For who ?
This guide has been designed for Node.js/Javascript developers.

> We assumes that you have already installed and set up a local agent.

## Requirements

- [Node.js](https://nodejs.org/en/) version 10 or higher.
- [Git](https://git-scm.com/) (**for manual installation**).
- [SlimIO CLI](https://github.com/SlimIO/CLI)

> ⚠️ Node.js must be installed first to get access to npm.

To setup the SlimIO CLI with **npm** just run in your terminal:
```bash
$ npm install @slimio/cli -g
```

## Getting Started

Go to the root of your Agent and run the SlimIO `--create` command:
```bash
$ cd Agent
$ slimio create
```

And then select **Addon**, and enter the name you want.

The generated code will be the following (where `addonName` is the name of the addon):
```js
const Addon = require("@slimio/addon"); 

const addonName = new Addon("addonName"); 

addonName.on("start", () => {
    // Tell the core that your addon is ready !
    addonName.ready();
});

module.exports = addonName;
```

A complete API Documentation of Addon can be found [here](https://github.com/SlimIO/Addon).

<p align="center">
<img src="./images/addon.svg" width="650">
</p>

By default an Addon already chip with some **Callbacks** and **Events**.
