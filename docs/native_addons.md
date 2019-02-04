# How to contribute to N-API Addons

## Requirements
- Node.js v10 or higher

## How to build N-API
Follow the [installation](https://github.com/nodejs/node-gyp#installation) instructions on the node-gyp package.

For **Windows**, Node.js allow you to install build tools at installation (be sure to get the checkbox).
![](./images/build_tools.jpg)

---
When everything is setup, just run in order:
```bash
$ npx node-gyp configure
$ npx node-gyp build
```

The configure command will setup the default project configuration and download requiring Node.js headers (if they are missing). Only re-run this command if you are updating `binding.gyp` file.

The build command run the compiler chain.

## Available (non built-in) npm scripts
All projects commands are described here:

| command | description |
| --- | --- |
| npm run prebuilds | Generate N-API prebuilds |
| npm run build | Run node-gyp configure and build |
| npm run doc | Generate JSDoc .HTML documentation (in the /docs root directory) |
| npm run coverage | Generate coverage of tests |
| npm run report | Generate .HTML report of tests coverage |

> the report command have to be triggered after the coverage command.

