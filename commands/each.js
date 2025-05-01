import cmd from "../command.js";
import log from "../log.js";

export default class each extends cmd {
  static self = cmd.gen('each').on('call', o => {
    const tok = o.a.at(0);
    const a = o.a.slice(1);
    const i = a.join(' ');
    const c = cmd.list.get(tok);
    if (c === undefined) {
      log.err('no cmd');
      return null;
    } else {
      return o.v.map(v => c.call({ v, a, i}));
    }
  }).commit();
}