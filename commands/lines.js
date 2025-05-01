import cmd from "../command.js";

export default class lines extends cmd {
  static self = cmd.gen('lines').on('call', o => o.v.split('\n')).commit();
}