import {Service} from "interstellar-core";

@Service('Alerts')
export default class AlertsService {
  constructor() {
    this.groups = {};
  }

  registerGroup(alertGroup) {
    this.groups[alertGroup.id] = alertGroup;
  }

  getGroup(id) {
    return this.groups[id];
  }
}
