import cmd from './command.js';
import log from './log.js';

import colors from 'picocolors';
import fs from 'fs/promises';
import readline from 'readline';

global.line = 1;
global.v = '';
global.hist = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '',
});

rl.on('line', input => {
  if (input.match(/^[1-9][0-9]*$/)) {
    global.v = global.hist.at(Number(input) - 1);
    log.out();
    return;
  }
  if (input === 'up') {
    global.v = global.hist.at(-2);
    log.out();
    return;
  }
  const toks = input.split(' ');
  const tok = toks.at(0);
  const a = toks.slice(1);
  const i = a.join(' ');
  const c = cmd.list.get(tok);
  if (c === undefined) {
    log.err('no cmd');
    global.v = null;
  } else {
    global.v = c.call({ v: global.v, a, i});
  }
  log.out();
});

export default async function shell () {
  const files = await fs.readdir('commands');
  for (const file of files) {
    const mod = await import('./commands/' + file);
  }
  process.stdout.write(colors.gray('-> '));
}