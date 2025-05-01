import cmd from './command.js';

import fs from 'fs/promises';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', input => {
  const toks = input.split(' ');
  const tok = toks.at(0);
  const a = toks.slice(1);
  const i = a.join(' ');
  const c = cmd.list.get(tok);
  console.log(c.call({ a, i }));
});

export default async function shell () {
  const files = await fs.readdir('commands');
  for (const file of files) {
    const mod = await import('./commands/' + file);
  }
}