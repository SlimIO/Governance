# Governance
![discord](https://img.shields.io/discord/359783688403156994.svg?style=flat)

SlimIO - Governance &amp; Documentation repository.

## Introduction
SlimIO is a light and modulable monitoring Node.js / C / C++ agent. 

Our goals is to bring the monitoring to the whole IT (Standalone, Cloud, Physical machine etc..) for both large and small businesses.

## Documentation
- [How to contribute to N-API Addons](./docs/native_addons.md)

Google Drive (French):
- [Politique de Mise à jour (Update policy)](https://docs.google.com/document/d/163Fb4HufSck27VW1ZWeEoDPPKGCnVKBo-6Zxbt2Bj64/edit?usp=sharing)
- [Architecture Technique (Technical Architecture)](https://docs.google.com/document/d/15e4z7Ev7ObohDWgZwGkd6PDq-cWtC54aUvPSP2finZw/edit?usp=sharing)

## Contribution Guidelines
Before contributing, please check and read our [Code of conduct](./COC_POLICY.md).

Feel free to join us on discord to ask questions !

[![ES-Community](https://discordapp.com/api/guilds/359783688403156994/embed.png?style=banner2)](https://discord.gg/YA87kR2)

## Collaborators & Contributors
The people below are collaborators of the SlimIO project or contributor on one/many open-source projects.

- [fraxken](https://github.com/fraxken) - GENTILHOMME Thomas &lt;gentilhomme.thomas@gmail.com&gt;
- [Aleksander](https://github.com/AlexandreMalaj) - MALAJ Alexandre &lt;alexandre.malaj@gmail.com&gt;
- [Captain](https://github.com/Captainfive) - MONTES Irvin &lt;vinou_montes@hotmail.fr&gt;
- [GuismoJames](https://www.linkedin.com/in/jgentilhomme/) - GENTILHOMME Jonathan &lt;gentilhomme.jonathan@gmail.com&gt;
- [Marko](https://github.com/Markobobby) - MALAJ Mark &lt;Malaj1.mark@gmail.com&gt;
- [Nico](https://github.com/Dafyh) - MARTEAU Nicolas &lt;nico_mart@hotmail.fr&gt;

> **GENTILHOMME Thomas** is the Technical Leader of the SlimIO Project (feel free to contact him for any technical / business question).

## Available Repositories
The following section contains all SlimIO packages and projects splited by their roles.

<details><summary>Tools (Maintenance assistance)</summary>

The purpose of tools are to help developer in many ways (by keeping the code safe, helping to bootstrap tasks etc..).
- [Eslint-config](https://github.com/SlimIO/Eslint-config) - ESLint configuration
- [TSD](https://github.com/SlimIO/tsd) - SlimIO TypeScript definition
- [Discord BOT](https://github.com/SlimIO/Bot) - Discord.js BOT for our Discord (Manage webhooks etc..).
- [Generator](https://github.com/SlimIO/Generator) - Generate a SlimIO project with a CLI.
- [Dependency Analyser](https://github.com/SlimIO/Dependency-Analyser) - SlimIO projects and dependencies Network
- [PSP](https://github.com/SlimIO/psp) - Project Struct Policy
</details>

<details><summary>Utils</summary>

Utils projects and packages are created to answer specific need of one or many internal projects.
- [Utils](https://github.com/SlimIO/Utils) - SlimIO internal utils Functions
- [Units](https://github.com/SlimIO/Units) - SlimIO Metric Units
- [lstree](https://github.com/SlimIO/lstree) - System Tree Printer as CLI (with a Node.js API)
- [is](https://github.com/SlimIO/is) - JavaScript type checker for Node.js
- [ArgParser](https://github.com/SlimIO/ArgParser) - Secure and reliable Command Line Argument parser for SlimIO.
- [Queue](https://github.com/SlimIO/Queue) - Queue Class for internal usage.
- [Lazy](https://github.com/SlimIO/Lazy) - Setup lazy properties on JavaScript Object (used in SlimIO/Units).
- [SafeEmitter](https://github.com/SlimIO/safeEmitter) - Node.js EventEmitter like but with Error isolation to avoid Dep18.
- [Unzipper](https://github.com/SlimIO/unzipper) - Modern async/await yauzl wrapper to unzip .zip file.
- [Nodejs-Downloader](https://github.com/SlimIO/Nodejs-downloader) - Node.js binary and headers downloader
- [Timer](https://github.com/SlimIO/Timer) - Driftless timer interval for Node.js.
- [MIBParser](https://github.com/SlimIO/MIBParser) - SNMP MIB File parser.
- [npm-registry](https://github.com/SlimIO/Npm-registry) - npm registry programmatically API
- [Config-Migration](https://github.com/SlimIO/ConfigMigration) - SlimIO Config Migration with JSON Schema.
- [Immutable](https://github.com/SlimIO/Immutable) - Immutable Objects
- [Struct](https://github.com/SlimIO/Struct) - Struct implementation in JavaScript
- [BufferSchema](https://github.com/SlimIO/BufferSchema) - ArrayBuffer and TypedArray syntax.
- [Github](https://github.com/SlimIO/github) - Download and extract github repository.
- [TimeMap](https://github.com/SlimIO/TimeMap) - ES6 Map-Like implementation with keys that have a defined timelife
- [jsdoc](https://github.com/SlimIO/jsdoc) - JSDoc Generator
- [OpenAPI](https://github.com/SlimIO/OpenAPI) - OpenAPI - Node.js Programmatically implementation (Spec Compliant)
- [Async-cli-spinner](https://github.com/SlimIO/Async-cli-spinner) - CLI Spinners
- [Pretty-JSON](https://github.com/SlimIO/Pretty-JSON) - stdout pretty (clean) JSON in your TTY
- [sqlite-transaction](https://github.com/SlimIO/sqlite-transaction) - Transaction Manager for SQLite.
- [Math](https://github.com/SlimIO/Math) - SlimIO - Node.js WebAssembly Metrology Math lib
</details>

<details><summary>Core & Agent</summary>
<br />

- [Core](https://github.com/SlimIO/Core) - SlimIO Core
- [Agent](https://github.com/SlimIO/Agent) - SlimIO Agent
- [Addon](https://github.com/SlimIO/Addon) - Addon Container
- [Scheduler](https://github.com/SlimIO/Scheduler) - Addon Callback Scheduler
- [Config](https://github.com/SlimIO/Config) - SlimIO - Reactive and Safe JSON Configuration loader
- [ipc](https://github.com/SlimIO/ipc) - Node.js end-to-end IPC (Inter Process Communication).
- [Alert](https://github.com/SlimIO/Alert) - Alarms utilities for Addons to interact with Events asynchronously
- [Metrics](https://github.com/SlimIO/Metrics) - Metrics utilities for Addons to interact with Events asynchronously

---
Agent Built-in Addons:

- [Events](https://github.com/SlimIO/Events) - Events Addon
- [Socket](https://github.com/SlimIO/Socket) - Socket Addon
- [Gate](https://github.com/SlimIO/Gate) - Gate Addon
- [Alerting](https://github.com/SlimIO/Alerting) - Alerting Addon
- [Aggregator](https://github.com/SlimIO/Aggregator) - Aggregator Addon
</details>

<details><summary>Addons</summary>
<br />

- [cpu](https://github.com/SlimIO/cpu-addon) - CPU Addon
- [ihm](https://github.com/SlimIO/ihm) - Agent Interface Homme Machine
</details>

<details><summary>Integration Tools</summary>
<br />

- [Manifest](https://github.com/SlimIO/Manifest) - Manifest file for SlimIO projects
- [CLI](https://github.com/SlimIO/CLI) - Product Command Line Interface
- [AddonFactory](https://github.com/SlimIO/Addon-Factory) - Factory to build Addon programmatically
- [TcpSDK](https://github.com/SlimIO/Tcp-Sdk) - TCP SDK to communicate in socket with the product
- [Desktop](https://github.com/SlimIO/Desktop) - Application bureautique pour les intégrateurs (Client lourd)
- [Bundler](https://github.com/SlimIO/Bundler) - SlimIO Archive (Addon & Core) Bundler
</details>

<details><summary>API HTTP (Web Service)</summary>
<br />

- [Registry](https://github.com/SlimIO/Registry) - Addon registry
- [Documentation](https://github.com/SlimIO/documentation) - SlimIO Doc Generator
- [N-API-CI]() - CI Server for N-API projects
</details>

<details><summary>C/C++ Binding</summary>
<br />

- [Windrive](https://github.com/SlimIO/Windrive) - Node.js binding which expose low-level Microsoft APIs on Logical Drive, Disk and Devices.
- [Winservices](https://github.com/SlimIO/Winservices) - Node.js binding which expose low-level Microsoft APIs on Services.
- [Winmem](https://github.com/SlimIO/Winmem) - Node.js binding which expose low-level Microsoft APIs on Memory.
- [Winni](https://github.com/SlimIO/Winni) - Node.js binding which expose low-level Microsoft APIs on Network Interfaces, Adapter Addresses and IF_ROW.
- [Nixfs](https://github.com/SlimIO/Nixfs) - UNIX File System - Node.js low-level binding
- [Nixmem](https://github.com/SlimIO/Nixmem) - UNIX Memory - Node.js low level binding
- [Micro](https://github.com/SlimIO/Micro) - Micro timestamp for Node.js
- [pam](https://github.com/SlimIO/pam) - Node.js N-API binding for Linux pam Authentication
</details>

<details><summary>Archive/Deprecated</summary>
<br />

- [levelmanager](https://github.com/SlimIO/levelmanager) - LevelDB (Database) - GUI Manager build with electron
- [AgentOld](https://github.com/SlimIO/AgentOld) - Old SlimIO Agent POC
- [Error](https://github.com/SlimIO/Error) - Slim.IO - Opinionated Error(s) handle/generator
- [pm](https://github.com/SlimIO/pm) - SlimIO PM Configuration
- [CI-TEST](https://github.com/SlimIO/CI_TEST) - CI_TEST

</details>

## License
MIT
