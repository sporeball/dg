import cmd from "../command.js";

export default class where extends cmd {
  static self = cmd.gen('where').on('call', o => {
    const key = o.a.at(0).slice(1);
    if (o.a.at(1) !== '=') {
      log.err('use invalid');
    }
    const value = o.a.at(2);
    return o.v.filter(v => v[key] === value);
  }).commit();
}