# Use CLI

## For who ?
This guide has been designed for integrators and Node.js/Javascript developers.

## Requirements

- [Node.js](https://nodejs.org/en/) version 10 or higher.
- [Git](https://git-scm.com/) (**for manual installation**).
- [SlimIO CLI](https://github.com/SlimIO/CLI)

> ⚠️ Node.js must be installed first to get access to npm.

## Getting Started

To setup the SlimIO CLI with **npm** just run in your terminal:
```bash
$ npm install @slimio/cli -g
```


## CLI Commands

```
$ slimio --help

  Usage
    $ slimio <command> [options]

  Available Commands
    init         Initialize a new SlimIO Agent
    add          Add an addon to the agent (will be activated by default).
    create       Create and generate SlimIO Manifest and Addon
    build        Build the agent or a given addon
    connect      Connect to a local or remote running agent
    configure    Configure a local agent or a remote running agent
    set          Setup a new settings in the local cache
    get          Get one or all keys stored in the local cache

  For more info, run any command with the `--help` flag
    $ slimio init --help
    $ slimio add --help

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message
```

<br>
<details><summary>init [dirName=agent] [options]</summary>

```
$ slimio init --help

  Description
    Initialize a new SlimIO Agent

  Usage
    $ slimio init [dirName] [options]

  Options
    -a, --add     List to add addons with initialization
    -h, --help    Displays this message
```

</details>

<details><summary>add [addons] [options]</summary>

```
$ slimio add --help

  Description
    Add an addon to the agent (will be activated by default).

  Usage
    $ slimio add [addons] [options]

  Options
    -d, --disabled    Add an addon as disabled by default.
    -h, --help        Displays this message
```

Add enabled addon

```
$ slimio add ihm,FSC
```

Add disabled addon

```
$ slimio add --disabled ihm,FSC
```
</details>

<details><summary>create [type] [options]</summary>

```
$ slimio create --help

  Description
    Create and generate SlimIO Manifest and Addon

  Usage
    $ slimio create [type] [options]

  Options
    -n, --name    Addon name (only when type is Addon)
    -h, --help    Displays this message
```

Type must be `Manifest` or `Addon`.  
If you don't set a type, you will have a choice to make.

</details>


<details><summary>build [options]</summary>

```
$ slimio build --help

  Description
    Build the agent or a given addon

  Usage
    $ slimio build [options]

  Options
    -a, --addon    Addon name
    -t, --type     Type of build (addon or core)
    -h, --help     Displays this message
```

By default the command `$ slimio build` build only the core. If you want to add addons in the build, you need to add the option `--addon`.
```
$slimio build --addon events,socket
```


Otherwise if you want to only build an addon you must precise the type as `--type addons`

> All build will be in the `agent/build` folder

</details>

<details><summary>connect [agent=localhost:1337] [options]</summary>

```
$ slimio connect --help

  Description
    Connect to a local or remote running agent

  Usage
    $ slimio connect [agent] [options]

  Options
    -h, --help    Displays this message
```

</details>

<details><summary>configure [cmd] [addon] [options]</summary>

```
$ slimio configure --help

  Description
    Configure a local agent or a remote running agent

  Usage
    $ slimio configure [cmd] [addon] [options]

  Options
    -h, --help    Displays this message
```

> This command interact with the `agent.json` file.

All `cmd` :
```
$ slimio configure sync
```
This command synchronise the agent.json with all installed addon.
- Add the addon to the configuration if not exist and set `active` to false.
- Remove addons from the config file if they don't exist in `addon` folder.

<br>

```
$ slimio enable myAddon
# or
$ slimio disable myAddon
```
Change the `active` status of an addon

</details>

<details><summary>set &lt;key&gt; &lt;value&gt; [options]</summary>

```
$ slimio set --help

  Description
    Setup a new settings in the local cache

  Usage
    $ slimio set <key> <value> [options]

  Options
    -h, --help    Displays this message
```

</details>

<details><summary>get [key] [options]</summary>

```
$ slimio get --help

  Description
    Get one or all keys stored in the local cache

  Usage
    $ slimio get [key] [options]

  Options
    -h, --help    Displays this message
```

</details>
