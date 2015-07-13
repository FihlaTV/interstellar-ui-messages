export class Toast {
  constructor(text, duration = 2000) {
    this._text = text;
    this._duration = duration;
  }

  get text() {
    return this._text;
  }

  get duration() {
    return this._duration;
  }
}
