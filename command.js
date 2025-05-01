export default class cmd {
  static list = new Map;
  static now = {};
  static gen (tok) {
    this.now = { tok };
    return this;
  }
  static and () {
    return this;
  }
  static on (e, f) {
    this.now[e] = f;
    return this;
  }
  static commit () {
    this.list.set(this.now.tok, this.now);
  }
}