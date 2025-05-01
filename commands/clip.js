import cmd from "../command.js";

import clipboard from "clipboardy";

export default class clip extends cmd {
  static self = cmd.gen('clip').on('call', o => {
    clipboard.writeSync(o.v);
    return null;
  }).commit();
}