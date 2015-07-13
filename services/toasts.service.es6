import {Inject, Service} from "interstellar-core";

@Service('Toasts')
@Inject()
export default class ToastsService {
  constructor() {
    this.queue = [];
    this.listener = null;
  }

  show(toast) {
    this.queue.push(toast);
    this.listener();
  }

  getNext() {
    return this.queue.shift();
  }

  registerListener(listener) {
    this.listener = listener;
  }
}
