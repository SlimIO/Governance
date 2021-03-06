# Manage alarms and metrics

## For who ?
This guide has been designed for those who want to develop their own addons and

- Throw their own (custom) alarms.
- Declare and publish metrics.
- Declare (define) alerting rules and views.

## Requirements

- A SlimIO Agent

## Entity
SlimIO Entity is inspired and similar to [Configuration Item (CI)](https://en.wikipedia.org/wiki/Configuration_item). An entity represents a unique entity of the system where the agent live:

- Hardware component (CPU, Network Interfaces)
- Software
- Abstract (Agent, Virtual Container, etc..);
- Networks
- ...

> 👀 Each entity have their own [UUID](https://fr.wikipedia.org/wiki/Universal_Unique_Identifier) to be able to identify them during a possible centralization.

There is some important things to known:

- An entity has a **single parent** (only the root entity which describe **the agent itself has no parent**).
- A entity can be **described** with a description and many descriptors (Descriptors are dictionnary of key/value).

<p align="center">Example of Entities declaration in CPU Addon</p>

```js
import os from "os";

const CPU_MAIN_ENTITY = new Entity("cpu", {
    description: "Central Processing Unit"
});

const cpus = os.cpus();
for (let id = 0; id < cpus.length; id++) {
    const CPU_CHILD_ENTITY = new Entity(`CPU.${id}`, { parent: CPU_MAIN_ENTITY });

    // Add descriptors (cpu speed and cpu model)
    CPU_CHILD_ENTITY
        .set("speed", cpus[id].speed)
        .set("model", cpus[id].model);
}
```

If we check the SQLite database (in the **entity** table) we will see something like that:

```sql
SELECT * FROM entity
```

| id | uuid | parent | name | description |
| --- | --- | --- | --- | --- |
| 1 | 031a5386-53b2-429c-b445-5ad5b7594cf2 | NULL | DESKTOP-UHHC0KF | |
| 2 | 148e746f-beb6-4d82-b036-4f64a648deb3 | 1 | cpu | Central Processing Unit |
| 3 | efd671d4-83ab-4f57-b113-3eb21306010e | 2 | CPU.0 | N/A |

Alarms and Metrics require one entity to exist. If you do not specify the entity, then the product will use the root Agent entity by default (**id 1**).

Entities are managed by the built-in addon Events which expose many callbacks to manage and retrieve them:
- declare_entity
- declare_entity_descriptor
- get_descriptors
- search_entities
- get_entity_by_id
- remove_entity

Entity descriptors are dictionnary of key/value. For example, if we wanted to display the descriptors for the root entity:

```sql
SELECT key, value FROM entity_descriptor WHERE entity_id = 1
```

| key | value |
| --- | --- |
| arch | x64 |
| platform | win32 |
| type | Windows_NT |
| release | 10.0.17763 |


## Alarm
Alarms in SlimIO are managed and stored by the [Events](https://github.com/SlimIO/Events) built-in addon (in the db/events.db file). Events expose many callbacks and the complete list allow a complete CRUD management of alarms entities !
Some of these callbacks are:

- create_alarm
- get_alarms
- get_alarms_occurence
- remove_alarm

But those callbacks can be painful to work with because of the Asynchronous nature of the product (need to ensure that the given entity exist at a given time). That why we introduce [@slimio/alert](https://github.com/SlimIO/Alert) package that has been
build to simplify and enhance the developer experience.

<p align="center">Throwing an alarm on the root entity</p>

```js
import Addon from "@slimio/addon";
import alert from "@slimio/alert";

const test = new Addon("test");
const { Alarm } = alert(test);

new Alarm("test alarm!", {
   correlateKey: "test_alarm"
});
```

An alarm is composed of a **severity**, **correlateKey** and one **entity**.
The **correlate key** is used to identify and increment the occurence count of a given alarm (because you can have five same alarms but for five different devices).

The correlate key (or **CK** when abbreviated) must respect the following RegEx `^[a-z_]{1,35}$` (only lowercase and underscore).

> 👀 These alarms are easily managable from the **Alarm console** of the ihm addon.

## Metrics (QoS)

Same story for publishing raw data in SlimIO. Entities and metrics are managed in the built-in Events addon but we created a package to simplify the whole process.

Before publishing raw data to the product you need to declare what we call a "metric card". Without any valid metric card there is no way to publish a data to events. Each metric card require a valid Entity too.

If we get back to our CPU addon, the first thing to be done is to declare and initialize our package:
```js
// Require Third-party Dependencies
import Units from "@slimio/units";
import metrics from "@slimio/metrics";
import Addon from "@slimio/addon";

// CONSTANTS
const INTERVAL_MS = 5000;

// Declare Addon
const CPU = new Addon("cpu");
const { Entity, MetricIdentityCard, sendRawQoS } = metrics(CPU);
```

After that we declare our Entity and our metrics cards.

```js
const CPU_E = new Entity("cpu", {
    description: "Central Processing Unit"
});
new MetricIdentityCard("TOTAL", { unit: Units.Pourcent, entity: CPU_E });

const cpus = os.cpus();
for (let id = 0; id < cpus.length; id++) {
    const entity = new Entity(`CPU.${id}`, { parent: CPU_E })
        .set("speed", cpus[id].speed)
        .set("model", cpus[id].model);

    // All Identity Card are Prefixed by the Identity Name (ex: CPU_USER).
    const options = { unit: Units.MilliSecond, entity };
    new MetricIdentityCard("USER", options);
    new MetricIdentityCard("NICE", options);
    new MetricIdentityCard("SYS", options);
    new MetricIdentityCard("IDLE", options);
    new MetricIdentityCard("IRQ", options);
}
```

> You will notice that we use the **@slimio/units** package to help us to describe the unit kind of the Metrics.

To finally register a regular interval to recolt our raw data on the system.

```js
function cpuInterval() {
    const raw = { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 };
    const harvestedAt = new Date().getTime();

    const cpus = os.cpus();
    for (let id = 0; id < cpus.length; id++) {
        const { user, nice, sys, idle, irq } = cpus[id].times;
        sendRawQoS(`CPU.${id}_USER`, user, harvestedAt);
        sendRawQoS(`CPU.${id}_NICE`, nice, harvestedAt);
        sendRawQoS(`CPU.${id}_SYS`, sys, harvestedAt);
        sendRawQoS(`CPU.${id}_IDLE`, idle, harvestedAt);
        sendRawQoS(`CPU.${id}_IRQ`, irq, harvestedAt);

        raw.user += user;
        raw.nice += nice;
        raw.sys += sys;
        raw.idle += idle;
        raw.irq += irq;
    }

    const pourcent = raw.idle / (raw.user + raw.nice + raw.sys + raw.idle + raw.irq);
    sendRawQoS("CPU_total", (1 - pourcent) * 100, harvestedAt);
}
CPU.registerInterval(cpuInterval, INTERVAL_MS);
```
