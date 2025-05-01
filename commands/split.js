import cmd from "../command.js";
import log from "../log.js";

import colors from 'picocolors';

export default class split extends cmd {
  static self = cmd.gen('split').on('call', o => {
    if (o.a.at(0) !== 'on') {
      log.err(`use invalid (try ${colors.cyan("'split on'")})`);
      return null;
    }
    return o.v.split(o.a.at(1));
  }).commit();
}