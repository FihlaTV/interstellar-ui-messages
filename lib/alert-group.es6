let groupIdCounter = 0;

export class AlertGroup {
  constructor() {
    this._id = `interstellar-ui-messages.alert-group-${groupIdCounter++}`;
    this.alerts = [];
    this.updateListener = null;
  }

  get id() {
    return this._id;
  }

  show(alert) {
    this.alerts.push(alert);
    this._update();
  }

  clear() {
    this.alerts = [];
    this._update();
  }

  dismissAlert(index) {
    this.alerts.splice(index, 1);
  }

  registerUpdateListener(listener) {
    this.updateListener = listener;
  }

  _update() {
    if (this.updateListener) {
      this.updateListener(this.alerts);
    }
  }
}
