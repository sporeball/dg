import cmd from "../command.js";

export default class join extends cmd {
  // TODO: more with this
  static self = cmd.gen('join').on('call', o => o.v.join(',')).commit();
}