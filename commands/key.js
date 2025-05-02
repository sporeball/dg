import cmd from "../command.js";

export default class key extends cmd {
  static self = cmd.gen('key').on('call', o => o.v[o.i]).commit();
}