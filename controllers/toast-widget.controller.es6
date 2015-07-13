require('../styles/toast-widget.scss');
import {Widget, Inject} from 'interstellar-core';
import {Toast} from '../lib/toast.es6';

@Widget('toast', 'ToastWidgetController', 'interstellar-ui-messages/toast-widget')
@Inject('$timeout', 'interstellar-ui-messages.Toasts')
export default class ToastWidgetController {
  constructor($timeout, Toasts) {
    this.$timeout = $timeout;
    this.Toasts = Toasts;
    this.visible = false;
    this.Toasts.registerListener(() => this._showToast.call(this));
  }

  _showToast() {
    if (this.visible) {
      return;
    }
    this.toast = this.Toasts.getNext();
    if (!this.toast) {
      return;
    }
    this.visible = true;
    this.$timeout(() => {
      this.visible = false;
      this.$timeout(() => {
        this._showToast();
      }, 500);
    }, this.toast.duration);
  }
}
