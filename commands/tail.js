import cmd from "../command.js";

export default class tail extends cmd {
  static self = cmd.gen('tail').on('call', o => o.v.at(-1)).commit();
}