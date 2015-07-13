import {Module} from "interstellar-core";

export {Alert} from "./lib/alert";
export {AlertGroup} from "./lib/alert-group";
export {Toast} from "./lib/toast";

const mod = new Module('interstellar-ui-messages');
export default mod;

mod.controllers = require.context("./controllers", true);
mod.services    = require.context("./services", true);
mod.templates   = require.context("raw!./templates", true);

mod.define();
