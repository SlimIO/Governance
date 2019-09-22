# Manage alarms and metrics

## For who ?
This guide has been designed for those who want to develop their own addons and

- Throw their own (custom) alarms.
- Declare and publish metrics.
- Declare (define) alerting rules and views.

## Requirements

- A SlimIO Agent

## Alarm
Alarms in SlimIO are managed and stored by the [Events](https://github.com/SlimIO/Events) built-in addon (in the db/events.db file). Events expose many callbacks and the complete list allow a complete CRUD management !
Some of these callbacks are:

- create_alarm
- get_alarms
- get_alarms_occurence
- remove_alarm

But those callbacks can be painful to work with because of the Asynchronous nature of the product. That why we introduce [@slimio/alert](https://github.com/SlimIO/Alert) package that has been
build to simplify and improve the developer experience.

<p align="center">Throwing an alarm on the root entity</p>

```js
const Addon = require("@slimio/addon");
const alert = require("@slimio/alert");

const test = new Addon("test");
const { Alarm } = alert(test);

new Alarm("test alarm!", {
   correlateKey: "test_alarm"
});
```

An alarm is composed of a **severity**, **correlateKey** and one **entity**.
The **correlate key** is used to identify and increment the occurence count of a given alarm (because you can have five same alarms but for five different devices).

The correlate key (or **CK** when abbreviated) must respect the following RegEx `^[a-z_]{1,35}$` (only lowercase and underscore).
