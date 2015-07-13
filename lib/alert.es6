import {contains} from 'lodash';
const types = require('./alert-types.json');

export class Alert {
  constructor({title, text, type, dismissible}) {
    if (!contains(types, type)) {
      throw new Error('Unknown alert type.');
    }

    this._title = title;
    this._text  = text;
    this._type  = type;
    this._dismissible = dismissible || true;
  }

  get title() {
    return this._title;
  }

  get text() {
    return this._text;
  }

  get type() {
    return this._type;
  }

  get dismissible() {
    return this._dismissible;
  }

  isDismissible() {
    return !!this._dismissible;
  }

  setDismissible(value) {
    this._dismissible = value;
  }

  static get TYPES() {
    return types;
  }
}
