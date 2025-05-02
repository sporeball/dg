import cmd from "../command.js";

export default class count extends cmd {
  static self = cmd.gen('count').on('call', o => o.v.length).commit();
}