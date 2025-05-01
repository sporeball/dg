import cmd from "../command.js";

export default class echo extends cmd {
  static self = cmd.gen('echo').on('call', o => o.i).commit();
}