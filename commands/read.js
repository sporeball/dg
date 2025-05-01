import cmd from "../command.js";

import fs from 'fs';

export default class read extends cmd {
  static self = cmd.gen('read').on('call', o => {
    // TODO: implicit ext
    const f = fs.readFileSync(o.a.at(0), { encoding: 'utf8' }).trim();
    return f;
  }).commit();
}