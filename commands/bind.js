import cmd from "../command.js";

export default class bind extends cmd {
  static self = cmd.gen('bind').on('call', o => {
    const a = o.a.map(x => x.replace(',', ''));
    const entries = a.map((x, i) => [x, o.v[i]]);
    return Object.fromEntries(entries);
  }).commit();
}