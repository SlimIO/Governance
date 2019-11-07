# Governance
![love](https://forthebadge.com/images/badges/built-with-love.svg)
![js](https://forthebadge.com/images/badges/made-with-javascript.svg)
![foryou](https://forthebadge.com/images/badges/for-you.svg)

SlimIO - Governance &amp; Documentation repository.

> 👀 [SlimIO Gource Youtube Video](https://www.youtube.com/watch?v=pMkiWtLNyjY)

## Introduction
SlimIO is a light and modulable monitoring solution writted in Node.js / C / C++.

Our goals is to bring the monitoring to the whole IT (Embedded system, Cloud, On-premise) for both large and small businesses (It's not a promise **but a destination** to keep the project on the right track). We designed and crafted the product with **accessibility**, **maintainability** and **flexibility** in mind at every development steps (For us this is the key to build a successfull product).

Each covered features and core components are part of an Addon (one role/feature = one addon). That's really the strength of our solution that allow us to:
- Register the monitoring in a [devops](https://en.wikipedia.org/wiki/DevOps) process/mentality.
- Apply security patches **very quickly** (The goal is to avoid an architecture that push into transitive open-source code).
- Evolving given part of the software without having to break the whole product (and **when possible** with no service degradation).
- Easier to fire hunt and debug (like fire doors, we isolate each piece so that the fire does not spread).
- Clean scope of what we have to self monitor.
- Etc...

Our default metrology set of addons has been designed to monitore local host in first place, but they will also have the ability to complete a remote monitoring for those who want an agentless solution (with support for the most common protocols like **SNMP** and **WMI**).

### What are the strenghts of our product?

- 💰 Agent free-to-use and open-source.
- 🎨 Designed to be extensible and customizable with [addons](https://github.com/SlimIO/addon) (Addons can be published and downloaded with the  [SlimIO Registry](https://github.com/SlimIO/Registry)).
- 🌎 Cross-platform with no "**side-effects**" (We are working on unified high-level interfaces for Windows and UNIX).
- 👀 The core modules has been designed following [Reactive Pattern](https://en.wikipedia.org/wiki/Reactive_programming).
- 📉 Consume system resources smartly and wisely (We are focusing on the goal of **1%** of system memory consumption to run a normal Agent).
- 🔍 Self-monitoring of the product natively integrated.
- 🚀 No configuration required to start an agent.
- ❤️ A CLI available to help integrators, developers and customers to install, configure and build the product (by adapting to your needs).
- ⚡️ Hot reload and upgrade with no loss of service (what we call **Shadow Mode**).
- 🔒 Strong security policy (Avoid indirect dependencies, Regular audits, Integrity checksum etc).
- 📄 Fully documented.
- 🚥 A lot of projects and packages with complete tests suites. (Some are more prone to Black box than White box).

> Note: The agent work in standalone with all features (Alerting, Aggregation, Interface, Reporting etc..). Centralization is optional.

### What are the weakness of our product?

- 📦 JavaScript is not statically compiled, so we have to embed the Node.js executable with the core (it cost ~ **~30mb** in size).
- 🏠 There is some isolation issues when addons are running in the same process (These are not critical if the developer is not making big mistakes). We are working to fix these issues in the long-term with Asynchronous Realm and Node.js Workers to be able to achieve a fault-tolerant Agent.
- 📈 V8 require high amount of memory to optimize slow interpreted code into low level machine code (CSA etc). The current memory footprint is between **15mo** and **20mo**.

This is the price we pay for most of the listed top strengths (We truly believe that this trade is beneficial in the long term).

## why choose SlimIO rather than a concurrent solution ?

The SlimIO project started with this simple question: **How to build a sustainable monitoring solution that can answer the needs of our customers over time ?**

Our product has been created to be a polyvalent monitoring solution capable to answer a wide range of production cases (even if we are not doing it in the fastest and/or best way at the beginning). SlimIO remain neutral and bring a lot of tools on the table to allow developers to extend the product as they want very easily.

- APM
- Network
- Infrastructure
- Logs
- Whatever you want

Agentless or not. Cloud or on-premise.

## Documentation

> ⚠️ There is no MVP of SlimIO yet. Dont expect to achieve monitoring with these docs (as a non-developer/contributor).

- [SlimIO - Agent Starter Guide](./docs/get_started.md)
- [Create your first SlimIO Addon](./docs/first_addon.md)
- [Manage alarms and metrics in Addons](./docs/manage_alarm_and_metric.md)

## Contribution Guidelines
Before contributing, please check and read our [Code of conduct](./COC_POLICY.md). There is some guides available to help developers and contributors:

- [How to contribute to N-API Addons](./docs/native_addons.md)
- [Tools for SlimIO developers & contributors](./docs/tooling.md)

Some french architectural/security documentation:
- [Politique de Mise à jour (Update policy)](https://docs.google.com/document/d/163Fb4HufSck27VW1ZWeEoDPPKGCnVKBo-6Zxbt2Bj64/edit?usp=sharing)
- [Architecture Technique (Technical Architecture)](https://docs.google.com/document/d/15e4z7Ev7ObohDWgZwGkd6PDq-cWtC54aUvPSP2finZw/edit?usp=sharing)
- [Guide de sécurité](https://docs.google.com/document/d/1GRMbKmnibFZMQWzcVmwmcjLRVlKcFFrlEnfD8X8aNEg/edit?usp=sharing)

Feel free to join us on discord to ask questions !

[![ES-Community](https://discordapp.com/api/guilds/359783688403156994/embed.png?style=banner2)](https://discord.gg/YA87kR2)

## Team

Core collaborators of the SlimIO project.

- [fraxken](https://github.com/fraxken) - GENTILHOMME Thomas &lt;gentilhomme.thomas@gmail.com&gt;
- [Aleksander](https://github.com/AlexandreMalaj) - MALAJ Alexandre &lt;alexandre.malaj@gmail.com&gt;
- [Captain](https://github.com/Captainfive) - MONTES Irvin &lt;vinou_montes@hotmail.fr&gt;
- [GuismoJames](https://www.linkedin.com/in/jgentilhomme/) - GENTILHOMME Jonathan &lt;gentilhomme.jonathan@gmail.com&gt;

> **GENTILHOMME Thomas** is leading the project. Feel free to contact him for any technical and business questions.

--- 

Contributors on one and/or many open-source projects that touch the SlimIO project.

- [Marko](https://github.com/Markobobby) - MALAJ Mark &lt;Malaj1.mark@gmail.com&gt;
- [Nico](https://github.com/Dafyh) - MARTEAU Nicolas &lt;nico_mart@hotmail.fr&gt;

<p align="center">Photos of us in our last dev camp</p>

| | |
| - | - |
| <img src="https://i.imgur.com/keaL2Yf.jpg"> | <img src="https://i.imgur.com/WWML8S8.jpg"> |
| <img src="https://i.imgur.com/TzTcrZ2.jpg"> | <img src="https://i.imgur.com/mSasDv5.jpg"> |

> 👀 if you'r a french student looking for a stage on JavaScript/Node.js, [we might be interested](https://github.com/SlimIO/Governance/blob/master/stage.md).

## Available Repositories
The following section contains all SlimIO packages and projects splited by their roles (kind). Each "kind" of project is described by the [following documentation](https://github.com/SlimIO/Manifest#available-types). If you want a way of visualizing all SlimIO projects the [Dependency-Analyzer](https://github.com/SlimIO/Dependency-Analyser) project has been made for you !

<p align="center">
<img src="https://media.discordapp.net/attachments/359783689040953354/622219583121784893/unknown.png">
</p>

--- 

<details><summary>archived</summary>

TBC
- [AgentOld](https://github.com/SlimIO/AgentOld) - Old SlimIO Agent
- [Error](https://github.com/SlimIO/Error) - Slim.IO - Opinionated Error(s) handle/generator
- [levelmanager](https://github.com/SlimIO/levelmanager) - LevelDB (Database) - GUI Manager build with electron

</details>

<details><summary>Addon</summary>

SlimIO Addons
- [cpu-addon](https://github.com/SlimIO/cpu-addon) - SlimIO CPU Addon
- [Events](https://github.com/SlimIO/Events) - SlimIO - Events (Built-in Addon)
- [Gate](https://github.com/SlimIO/Gate) - Built-in Addon Gate
- [Socket](https://github.com/SlimIO/Socket) - Built-in Socket Addon
- [Alerting](https://github.com/SlimIO/Alerting) - SlimIO - Alerting Addon
- [Aggregator](https://github.com/SlimIO/Aggregator) - SlimIO - Metrics Aggregator Addon
- [cpu](https://github.com/SlimIO/cpu) - Windows & Unix Native Node.js binding - CPU Monitoring
- [ihm](https://github.com/SlimIO/ihm) - Agent IHM (Interface Homme Machine)
- [Prism](https://github.com/SlimIO/Prism) - Prism - Distribution Server Addon

</details>

<details><summary>Package</summary>

Classical 'npm' packages
- [Core](https://github.com/SlimIO/Core) - SlimIO Core
- [Config](https://github.com/SlimIO/Config) - SlimIO - Reactive and Safe JSON Configuration loader
- [Addon](https://github.com/SlimIO/Addon) - SlimIO Addon container
- [Utils](https://github.com/SlimIO/Utils) - SlimIO Utilities Functions
- [Scheduler](https://github.com/SlimIO/Scheduler) - SlimIO - Scheduler/Time Walk for Node.js
- [Config-Migration](https://github.com/SlimIO/Config-Migration) - SlimIO JSON Schema Migration (Payload Migration)
- [Mib-Parser](https://github.com/SlimIO/Mib-Parser) - Pure Asynchronous JavaScript (Node.JS) MIB Parser
- [is](https://github.com/SlimIO/is) - SlimIO IS - Node.js JavaScript Type checker 
- [Safe-emitter](https://github.com/SlimIO/Safe-emitter) - Safe Node.js EventEmitter designed for isolation
- [Units](https://github.com/SlimIO/Units) - SlimIO Metric Units
- [Arg-parser](https://github.com/SlimIO/Arg-parser) - SlimIO - Secure and reliable Node.js Argv Parser
- [Addon-Factory](https://github.com/SlimIO/Addon-Factory) - SlimIO - Factory to build Addon programmatically
- [Metrics](https://github.com/SlimIO/Metrics) - This package provide a developer interface to interact with Events Addon
- [Timer](https://github.com/SlimIO/Timer) - SlimIO - Node.js Driftless Interval Timer
- [Buffer-Schema](https://github.com/SlimIO/Buffer-Schema) - SlimIO Buffer Schema
- [Lazy](https://github.com/SlimIO/Lazy) - SlimIO Little lib to set Lazy Properties on JavaScript Objects!
- [Struct](https://github.com/SlimIO/Struct) - Node.js Schema Structure
- [Npm-registry](https://github.com/SlimIO/Npm-registry) - Node.js npm registry (GET) API with TypeScript def
- [Queue](https://github.com/SlimIO/Queue) - SlimIO - Queue Class designed for SlimIO Core
- [Nodejs-downloader](https://github.com/SlimIO/Nodejs-downloader) - SlimIO - Node.js binary and headers downloader
- [Tcp-Sdk](https://github.com/SlimIO/Tcp-Sdk) - SlimIO - TCP SDK to communicate in socket with the product
- [github](https://github.com/SlimIO/github) - Download and Extract Github repository 
- [ipc](https://github.com/SlimIO/ipc) - SlimIO - Node.js Inter Process Communication
- [lstree](https://github.com/SlimIO/lstree) - System Tree Printer as CLI (with a Node.js API)
- [unzipper](https://github.com/SlimIO/unzipper) - Node.js Modern Yauzl wrapper
- [OpenAPI](https://github.com/SlimIO/OpenAPI) - OpenAPI - Node.js Programmatically implementation (Spec Compliant)
- [Alert](https://github.com/SlimIO/Alert) - SlimIO Addon Alarms utilities
- [Immutable](https://github.com/SlimIO/Immutable) - SlimIO Immutable Static Objects and Values
- [Manifest](https://github.com/SlimIO/Manifest) - SlimIO Project Manifest (.TOML)
- [TimeMap](https://github.com/SlimIO/TimeMap) - ES6 Map-Like implementation with keys that have a defined timelife
- [Math](https://github.com/SlimIO/Math) - SlimIO - Node.js WebAssembly Metrology Math lib
- [sqlite-transaction](https://github.com/SlimIO/sqlite-transaction) - SQLite Transaction Manager for SlimIO events
- [Unit-testing](https://github.com/SlimIO/Unit-testing) - SlimIO - Unit testing framework (WIP)
- [psp](https://github.com/SlimIO/psp) - SlimIO - Project structure policy
- [jsdoc](https://github.com/SlimIO/jsdoc) - Blazing fast 🚀 JSDoc generator/parser
- [Registry-SDK](https://github.com/SlimIO/Registry-SDK) - Node.js SDK For the SlimIO Registry API
- [Desktop](https://github.com/SlimIO/Desktop) - SlimIO - Application bureautique pour les intégrateurs (Client lourd)
- [Pretty-JSON](https://github.com/SlimIO/Pretty-JSON) - Stdout JSON in your terminal
- [Async-cli-spinner](https://github.com/SlimIO/Async-cli-spinner) - Elegant Asynchronous Terminal (CLI) Spinner for Node.js
- [Bundler](https://github.com/SlimIO/Bundler) - SlimIO Archive (Addon & Core) Bundler
- [Iterator](https://github.com/SlimIO/Iterator) - Iterators Utils
- [Blog](https://github.com/SlimIO/Blog) - SlimIO Blog
- [arg-checker](https://github.com/SlimIO/arg-checker) - SlimIO Argument Checker
- [Lock](https://github.com/SlimIO/Lock) - SlimIO Node.js Semaphore for async/await
- [MySQL](https://github.com/SlimIO/MySQL) - MySQL addon
- [pretty-stack](https://github.com/SlimIO/pretty-stack) - Pretty Stack Trace to stdout in TTY
- [FSC](https://github.com/SlimIO/FSC) - Slimio - FSC (File System Controller)
- [logger](https://github.com/SlimIO/logger) - SlimIO Sonic Logger
- [Grapher](https://github.com/SlimIO/Grapher) - 
- [wcwidth](https://github.com/SlimIO/wcwidth) - Port of C's wcwidth() and wcswidth()
- [Profiles](https://github.com/SlimIO/Profiles) - SlimIO - Addon Profiles Manager
- [Tarball](https://github.com/SlimIO/Tarball) - SlimIO archive (for addons and modules) tarball packer/extractor.

</details>

<details><summary>Degraded</summary>

Projects that are not matching our psp policies
- [Eslint-config](https://github.com/SlimIO/Eslint-config) - SlimIO ESLint configuration
- [tsd](https://github.com/SlimIO/tsd) - TypeScript definitions for SlimIO projects

</details>

<details><summary>NAPI</summary>

Node.js Native bindings writted in C/C++
- [Winni](https://github.com/SlimIO/Winni) - Windows Network Interfaces - Node.js low-level binding
- [Windrive](https://github.com/SlimIO/Windrive) - Windows Drive (disk) & Devices - Node.js low level binding
- [Winelog](https://github.com/SlimIO/Winelog) - Windows Events log reader - Node.JS low-level binding
- [Winservices](https://github.com/SlimIO/Winservices) - Windows Services - Node.js low level binding
- [Winmem](https://github.com/SlimIO/Winmem) - Windows Memory - Node.js low level binding
- [Nixni](https://github.com/SlimIO/Nixni) - UNIX Network Interfaces - Node.JS low level binding
- [Nixmem](https://github.com/SlimIO/Nixmem) - UNIX Memory - Node.js low level binding
- [Micro](https://github.com/SlimIO/Micro) - NodeJS C NAPI low level binding to get high resolution timestamp (in microseconds)
- [Nixfs](https://github.com/SlimIO/Nixfs) - UNIX File System - Node.js low-level binding
- [Nixdevices](https://github.com/SlimIO/Nixdevices) - UNIX System Devices - NodeJS low level binding
- [Nixproc](https://github.com/SlimIO/Nixproc) - Node.js - N-API Binding
- [pam](https://github.com/SlimIO/pam) - Node.js N-API binding for Linux pam Authentication

</details>

<details><summary>Service</summary>

Web API projects
- [Agent](https://github.com/SlimIO/Agent) - SlimIO Agent
- [Registry](https://github.com/SlimIO/Registry) - SlimIO - Addon registry
- [N-API-CI](https://github.com/SlimIO/N-API-CI) - Node.js N-API CI Server
- [Discord-Bot](https://github.com/SlimIO/Discord-Bot) - DiscordBot allow management of the notifications to avoid spam (greenkeeper, snyk, trello, drive ...)
- [Dependency-Analyser](https://github.com/SlimIO/Dependency-Analyser) - SlimIO - Dependency Analyser (Draw a network of all SlimIO Projects)
- [Gource-view](https://github.com/SlimIO/Gource-view) - Gource Generator for SlimIO (And any github organization)

</details>

<details><summary>CLI</summary>

Command Line Interface packages/projects
- [Generator](https://github.com/SlimIO/Generator) - SlimIO - Project & Addons Generator
- [CLI](https://github.com/SlimIO/CLI) - SlimIO - CLI (Command Line Interface)
- [documentation](https://github.com/SlimIO/documentation) - SlimIO Documentation Generator
- [Markdown-Dependencies](https://github.com/SlimIO/Markdown-Dependencies) - Create/Update the Dependencies section in README.md
- [Sync](https://github.com/SlimIO/Sync) - SlimIO Synchronizer - Pull, Update and track Node.js projects state (outdated, psp policies...)

</details>

## License
MIT
