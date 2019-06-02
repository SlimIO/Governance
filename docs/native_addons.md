# How to contribute to N-API Addons

## Requirements
- Node.js v10 or higher (for N-API v3+)

## How to build a N-API addon
Follow the [installation](https://github.com/nodejs/node-gyp#installation) instructions on the node-gyp package.

For **Windows**, Node.js allow you to install build tools at installation (be sure to get the checkbox).
<p align="center">
<img src="images/build_tools.jpg">
</p>

---
When everything is setup, just run in order:
```bash
$ npx node-gyp configure
$ npx node-gyp build
```

The configure command will setup the default project configuration and download requiring Node.js headers (if they are missing). Only re-run this command if **you are updating** `binding.gyp` file.

The build command run the compiler chain.

## Available N-API npm scripts
All projects commands are described here (all N-API projects must has these commands):

| command | description |
| --- | --- |
| npm run prebuilds | Generate N-API prebuilds |
| npm run build | Run node-gyp configure and build |

## Download or update N-API headers
To download and/or update N-API headers we created our [own binary tool](https://github.com/fraxken/napi-headers).

```bash
$ napihead --help
# or
$ npx napi-headers --help
```

N-API headers must be installed at the root of the project in the **./include** directory.

## Binding.gyp
The binding.gyp is the configuration file for Low-level binding.

> TBC
