# Governance
![love](https://forthebadge.com/images/badges/built-with-love.svg)
![js](https://forthebadge.com/images/badges/made-with-javascript.svg)
![foryou](https://forthebadge.com/images/badges/for-you.svg)

SlimIO - Governance &amp; Documentation repository.

> 👀 👉 We are actively looking for partners and contributors. The project requires a significant investment and we clearly lack qualified manpower.

## Introduction
SlimIO is a light and modulable unified monitoring solution who is trying to break and re-imagine several beliefs and practices that have long been applied to the world of monitoring.

Our goals is to bring and make accessible the monitoring to the whole IT (Embedded system, Cloud, On-premise) for both large and small businesses. We designed and crafted the product with **accessibility**, **maintainability** and **neutrality** in mind at every development steps.

Each covered features and core components are part of an Addon (one role/feature = one addon). That's really the strength of our solution that allow us to:
- Register the monitoring in any [DevOps](https://en.wikipedia.org/wiki/DevOps) process.
- Apply security patches **very quickly** (The goal is to avoid an architecture that push into transitive open-source code).
- Evolving given part of the software without having to break the whole product (and **when possible** with no service degradation).
- Easier to fire hunt and debug (like fire doors, we isolate each piece so that the fire does not spread).
- Clean scope of what we have to self monitor.
- Have a solution that adapts to a multitude of needs.
- Etc...

Our default metrology set of addons has been designed to monitore local host in first place, but they also have the ability to complete a remote monitoring for those who want an agentless solution (with support for the most common protocols like **SNMP** and **WMI**).

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

### Want more ?

There is SlimIO introduction article on [dev.to](https://dev.to/fraxken/slimio-introduction-3eg8).

## Documentation

> ⚠️ There is no MVP of SlimIO yet. Dont expect to achieve monitoring with these docs (as a non-developer/contributor).

- [SlimIO - Agent Starter Guide](./docs/get_started.md)
- [Create your first SlimIO Addon](./docs/first_addon.md)
- [Manage alarms and metrics in Addons](./docs/manage_alarm_and_metric.md)

### Architecture articles
- [Monolithic to Modular](https://dev.to/fraxken/slimio-architecture-1-monolithic-to-modular-4hm3)
- [Configuration](https://dev.to/fraxken/slimio-architecture-2-configuration-1429)
- [Stack choices](https://dev.to/fraxken/slimio-architecture-3-stack-cgm)

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
- [GuismoJames](https://www.linkedin.com/in/jgentilhomme/) - GENTILHOMME Jonathan &lt;gentilhomme.jonathan@gmail.com&gt;

> **GENTILHOMME Thomas** is leading the project. Feel free to contact him for any technical and business questions.

--- 

Contributors on one and/or many open-source projects that touch the SlimIO project.

- [Haze](https://github.com/CroquetMickael) - CROQUET Mickael
- [Captain](https://github.com/Captainfive) - MONTES Irvin &lt;vinou_montes@hotmail.fr&gt;
- [Marko](https://github.com/Markobobby) - MALAJ Mark &lt;Malaj1.mark@gmail.com&gt;
- [Nico](https://github.com/Dafyh) - MARTEAU Nicolas &lt;nico_mart@hotmail.fr&gt;
- [Rizou](https://www.linkedin.com/in/maxime-f%C3%A9ry-450769192/) - FERY Maxime &lt;maxime.fery@outlook.fr&gt;

<p align="center">Photos of us in our last dev camp</p>

| | |
| - | - |
| <img src="https://i.imgur.com/keaL2Yf.jpg"> | <img src="https://i.imgur.com/WWML8S8.jpg"> |
| <img src="https://i.imgur.com/TzTcrZ2.jpg"> | <img src="https://i.imgur.com/mSasDv5.jpg"> |

> 👀 if you'r a french student looking for a stage on JavaScript/Node.js, [we might be interested](https://github.com/SlimIO/Governance/blob/master/stage.md).

## Available Repositories
If you want a way of visualizing all SlimIO projects the [Dependency-Analyzer](https://github.com/SlimIO/Dependency-Analyser) project has been made for you !

<p align="center">
<img src="https://media.discordapp.net/attachments/359783689040953354/622219583121784893/unknown.png">
</p>

A status page as recently been created [here](https://github.com/SlimIO/Governance/blob/master/docs/project_status.md).

## License
MIT
