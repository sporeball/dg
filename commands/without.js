import cmd from "../command.js";

export default class without extends cmd {
  static self = cmd.gen('without').on('call', o => o.v.replaceAll(o.a.at(0), '')).commit();
}