# Create your first SlimIO Addon

## For who ?
This guide has been designed for Node.js/Javascript developers.

> We assumes that you have already installed and set up a local agent. If not, please refer to this [guide](https://github.com/SlimIO/Governance/blob/master/docs/get_started.md#slimio-starter-guide)

## Requirements

- [Node.js](https://nodejs.org/en/) version 10 or higher.
- [Git](https://git-scm.com/) (**for manual installation**).
- [SlimIO CLI](https://github.com/SlimIO/CLI#cli)

> ⚠️ Node.js must be installed first to get access to npm.

To setup the SlimIO CLI with **npm** just run in your terminal:
```bash
$ npm install @slimio/cli -g
```

> Dont hesitate to check the [CLI guide](https://github.com/SlimIO/Governance/blob/master/docs/use_cli.md#use-cli)

## Getting Started

Go to the root of your Agent folder and run the SlimIO `create` command:
```bash
$ cd yourAgentFolder
$ slimio create addon --name addonName
```

The generated code will be the following (where `addonName` is the name of the addon you specified):
```js
const Addon = require("@slimio/addon"); 

const addonName = new Addon("addonName"); 

addonName.on("start", async() => {
    // Tell the core that your addon is ready !
    await addonName.ready();
});

module.exports = addonName;
```

A complete API Documentation of Addon can be found [here](https://github.com/SlimIO/Addon#addon).

<p align="center">
<img src="./images/addon.svg" width="650">
</p>

By default an Addon already chip with some **Callbacks** and **Events**.

## Register and schedule a callback

It may be useful to schedule a callback that need to be executed at a regular interval but still need sometimes to be triggered manually (that the goal of callback ^^). A common case is to achieve some kind of "cleanup" task on a local database (or searching for external data at a given time).

There is two ways to register a `callback`:

> ⚠️ The callback should be an Asynchronous Function (Synchronous function will be rejected with a TypeError).

```js
myAddon.registerCallback("callback_name", async function() {
    console.log("callback_Name has been executed!");
});
```
>⚠️ Please, be sure to avoid Anonymous function as much possible!
Or by passing the callback reference as the name (The function can't be anonymous, else it will throw an Error).

```js
async function callbackName() {
    console.log("callback_Name has been executed!");
}
myAddon.registerCallback(callbackName);
```
> if Callback `name` isn't writted by following the `snake_case` convention, it will be set automatically !

`Schedule` a callback execution interval. Use the package [Scheduler](https://github.com/SlimIO/Scheduler) to achieve a scheduler !

```js
const Scheduler = require("@slimio/scheduler");
const Addon = require("@slimio/addon");

const myAddon = new Addon("myAddon");

async function sayHelloEveryOneSecond() {
   console.log("hello world");
}
myAddon
   .registerCallback(sayHelloEveryOneSecond)
   .schedule(new Scheduler({ interval: 1 }));
```

## Execute a function at a regular interval
Addon bring his custom method to schedule timer interval. What difference with the `setInterval` of Node.js ?
- Handle and manage errors for you (avoid falling into the [Node.js deprecation 0018](https://nodejs.org/api/deprecations.html#deprecations_dep0018_unhandled_promise_rejections)).
- The function is only executed if the addon is awake.
- They use [SlimIO Timer](https://github.com/SlimIO/Timer) under the hood to avoid drifting.

```js
const myAddon = new Addon("myAddon");

async function regularJob() {
    myAddon.logger.writeLine("regular job has been triggered!");
}
myAddon.registerInterval(regularJob, 30000); // exactly execute regularJob every 30 seconds
```

It's best practice to use the Addon method instead of **setInterval**. If you still want to use Node.js **setInterval**, then be sure to not fall into **UnhandledPromiseRejection** (the core force best practice so the whole process will be stopped).

## Waiting for another addon to be started
It is common for addons to work with each other. But often one or many externals addons can be vital to achieve one or many given tasks. Addon introduce the **lockOn** method to help developer to avoid unecessary try/catch and break controls.

```js
const myAddon = new Addon("myAddon");

// Ask our addon to wait for events to be ready before being awake ourself.
myAddon.lockOn("events");

// Notice that we catch the 'awake' event instead of 'start'
myAddon.on("awake", async() => {
    // here we are sure that 'events' will be reachable (no need to try/catch that sendOne).
    const info = await myAddon.sendOne("events.get_info");
    console.log(info);
    
    // Now at our turn to declare our addon "ready" to work with others :)
    await myAddon.ready();
});
```

In a case where **events** is stopped (for any technical reasons) then our addon will be put in sleep (that the reverse of awake).
```js
myAddon.on("sleep", () => {
   // we may want to close (free) active handlers here
});
```

More informations on events and states [here](https://github.com/SlimIO/Addon#available-events).

## Subscribing to given kinds of events (and receive them in real time).
It may be useful to catch the SlimIO events to achieve given tasks like managing Alarms and Metrics (that the case of [Alerting](https://github.com/SlimIO/Alerting) and [Aggregator](https://github.com/SlimIO/Aggregator) Addons).

Available Subjects are statically available on Addon Class. Example with **Alerting**:
```js
Alerting.of(Addon.Subjects.Alarm.Update).filter(([CID]) => Storms.has(CID)).subscribe({
    next([CID]) {
        const rule = Storms.get(CID);
        if (!rule.walk()) {
            return;
        }

        new Alarm(`Storm threshold below ${rule.occurence}`, {
            correlateKey: `storm_${CID}`,
            severity: rule.severity
        });
    },
    error(err) {
        Alerting.logger.writeLine(`Alarm.update | Finished with error: ${err}`);
    }
});
```

Subjects are described with the following TypeScript interface
```ts
export interface Subjects {
    Addon: {
        readonly Ready: string;
    };
    Alarm: {
        readonly Open: string;
        readonly Update: string;
        readonly Close: string;
    };
    Metrics: {
        readonly Update: string;
        readonly Create: string;
    }
}
```
