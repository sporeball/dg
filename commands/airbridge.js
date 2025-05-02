import cmd from "../command.js";
import log from "../log.js";
import { type_of } from "../util.js";

import colors from 'picocolors';
import fetch from 'sync-fetch';

export default class airbridge extends cmd {
  static self = cmd.gen('airbridge').on('call', o => {
    if (type_of(o.v) !== 'object') {
      log.err(`use invalid (try ${colors.cyan('{ name, base }')})`);
      return null;
    }
    return fetch(`https://api2.hackclub.com/v0.1/${o.v.name}/${o.v.base}`).json();
  }).commit();
}