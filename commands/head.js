import cmd from "../command.js";

export default class head extends cmd {
  static self = cmd.gen('head').on('call', o => o.v.at(0)).commit();
}