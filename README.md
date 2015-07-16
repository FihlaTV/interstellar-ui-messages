`interstellar-ui-messages`
==========================

The `interstellar-ui-messages` module is part of the [Interstellar Module System](https://github.com/stellar/interstellar).

This module provides common UI components.

> Quick start to developing in the Interstellar eco-system:
>
> * Read [`Getting started`](https://github.com/stellar/interstellar/tree/master/docs) doc.
> * Install [`interstellar-workspace`](https://github.com/stellar/interstellar-workspace).
> * Contribute to our [open-source modules](https://github.com/stellar/interstellar/blob/master/docs/module-list.md) or develop your own.

## Module contents

#### Classes
* [`Alert`](#alert-class)
* [`AlertGroup`](#alertgroup-class)
* [`Toast`](#toast-class)

#### Services
* [`interstellar-ui-messages.Alerts`](#interstellar-ui-messagesalerts-service)
* [`interstellar-ui-messages.Toasts`](#interstellar-ui-messagestoasts-service)

#### Widgets
* [`<interstellar-ui-messages-alerts>`](#interstellar-ui-messages-alerts-widget)
* [`<interstellar-ui-messages-toast>`](#interstellar-ui-messages-toast-widget)

## `Alert` class

`Alert` object represents single alert notification which can be attached to an [`AlertGroup`](#alertgroup-class).

```js
import {Alert} from 'interstellar-ui-messages';

let alert = new Alert({
  title: 'Password is incorrect',
  text: 'Make sure you are using a correct password to login.`,
  type: Alert.TYPES.ERROR,
  dismissible: false // default true
});
```

There are 4 possible `Alert.TYPES`:
* `Alert.TYPES.SUCCESS`
* `Alert.TYPES.INFO`
* `Alert.TYPES.WARNING`
* `Alert.TYPES.ERROR`

`Alert`s with `dismissible` parameter set to true will show a little `×` icon to allow user to dismiss an alert.

Check [`AlertGroup`](#alertgroup-class) docs for information on how to display an `Alert`.

**TODO**
* Sample alert screenshots.
* Alert/AlertGroup/widget graphic.
* Solar styling tips.

## `AlertGroup` class

`AlertGroup` represents a place in your UI where alerts are displayed. Your application/widget can have multiple `AlertGroup`s.

Once you create a new alert group and register in [`Alerts` service](#interstellar-ui-messagesalerts-service) you can show your first [`Alert`](#alert-class).

```js
import {Alert, AlertGroup} from 'interstellar-ui-messages';

let alertGroup = new AlertGroup();
Alerts.registerGroup(alertGroup);

let alert = new Alert({
  title: 'Password is incorrect',
  text: 'Make sure you are using a correct password to login.`,
  type: Alert.TYPES.ERROR,
  dismissible: false // default true
});
alertGroup.show(alert);
```

You can clear all alerts in existing group using `clear` method:

```js
alertGroup.clear();
```

To display your alert group in your UI use [`<interstellar-ui-messages-alerts>` widget](#interstellar-ui-messages-alerts-widget).

## `Toast` class

`Toast` object represents single toast message that can be displayed using [`Toast` service](#interstellar-ui-messagestoasts-service).

```js
let toast = new Toast('Transaction sent!');
```

You can pass a second parameter with number of miliseconds your toast should be visible:

```js
let toast = new Toast('Transaction sent!', 5000); // 5 seconds
```

Toast will be visible for 2 seconds by default.

## `interstellar-ui-messages.Alerts` service

`Alerts` service allows you to register your [`AlertGroup`](#alertgroup-class).

```js
import {AlertGroup} from 'interstellar-ui-messages';

let alertGroup = new AlertGroup();
Alerts.registerGroup(alertGroup);
```

You must register your alert group before you can use it within your application or widget.

You can also get previously registered group by it's ID:

```js
let alertGroup = Alerts.getGroup(groupId);
```

## `interstellar-ui-messages.Toasts` service

Use `Toasts` service to show your [`Toast`](#toast-class):

```js
import {Toast} from 'interstellar-ui-messages';
@Widget('send', 'SendWidgetController', 'interstellar-network-widgets/send-widget')
@Inject('interstellar-ui-messages.Toasts')
export default class SendWidgetController {
  constructor(Toasts) {
    this.Toasts = Toasts;
  }

  send() {
    // Send transaction
    let toast = new Toast('Transaction sent!');
    this.Toasts.show(toast);
  }
}
```

Remember you have to place [`<interstellar-ui-messages-toast>` widget](#interstellar-ui-messages-toast-widget) somewhere in you application. Otherwise your `Toast` won't appear.

## `<interstellar-ui-messages-alerts>` widget

Use `<interstellar-ui-messages-alerts>` widget to display [`AlertGroup`](#alertgroup-class) in your UI. This widget accepts one parameter: `group` which represents [`AlertGroup`](#alertgroup-class) object you want to display.

```js
import {AlertGroup} from 'interstellar-ui-messages';

@Widget('send', 'SendWidgetController', 'interstellar-network-widgets/send-widget')
@Inject('interstellar-ui-messages.Alerts')
export default class SendWidgetController {
  constructor(Alerts) {
    this.alertGroup = new AlertGroup();
    Alerts.registerGroup(this.alertGroup);
  }
}
```
```html
<div ng-controller="interstellar-network-widgets.SendWidgetController as widget">
  <interstellar-ui-messages-alerts group="widget.alertGroup"></interstellar-ui-messages-alerts>
</div>
```

## `<interstellar-ui-messages-toast>` widget

Use `<interstellar-ui-messages-toast>` widget to display toasts in your UI. There should be only one, global toast widget in your application.

```html
<interstellar-ui-messages-toast></interstellar-ui-messages-toast>
```
