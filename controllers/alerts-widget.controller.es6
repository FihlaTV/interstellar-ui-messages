require('../styles/toast-widget.scss');
import {Widget, Inject} from 'interstellar-core';
import {Toast} from '../lib/toast.es6';

@Widget('alerts', 'AlertsWidgetController', 'interstellar-ui-messages/alerts-widget', {
  scope: {group: '='}
})
@Inject('$scope', 'interstellar-ui-messages.Alerts')
export default class AlertsWidgetController {
  constructor($scope, Alerts) {
    this.alertGroup = Alerts.getGroup($scope.group.id);
    this.alertGroup.registerUpdateListener(alerts => {
      this.alerts = alerts;
    })
  }

  dismissAlert($event, index) {
    $event.preventDefault();
    this.alertGroup.dismissAlert(index);
  }
}
