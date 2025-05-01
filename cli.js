#!/usr/bin/env node

import shell from "./shell.js";

function cli () {
  const filename = process.argv[2];
  const args = process.argv.slice(3);
  if (filename === undefined) {
    return shell();
  }
}

try {
  cli();
} catch (e) {
  console.log(e);
  process.exit(1);
}