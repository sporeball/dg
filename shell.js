import cmd from './command.js';
import log from './log.js';

import colors from 'picocolors';
import fs from 'fs/promises';
import readline from 'readline';

global.line = 1;
global.v = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '',
});

rl.on('line', input => {
  const toks = input.split(' ');
  const tok = toks.at(0);
  const a = toks.slice(1);
  const i = a.join(' ');
  const c = cmd.list.get(tok);
  if (c === undefined) {
    log.err('no cmd');
  } else {
    global.v = c.call({ a, i });
    log.out();
  }
});

export default async function shell () {
  const files = await fs.readdir('commands');
  for (const file of files) {
    const mod = await import('./commands/' + file);
  }
  process.stdout.write(colors.gray('-> '));
}