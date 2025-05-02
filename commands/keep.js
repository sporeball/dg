import cmd from "../command.js";

export default class keep extends cmd {
  static self = cmd.gen('keep').on('call', o => o.v.filter(x => x === o.i)).commit();
}