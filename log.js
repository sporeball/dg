import colors from 'picocolors';
import stripAnsi from 'strip-ansi';

function pretty (v) {
  if (v === undefined) {
    return colors.gray('undefined');
  }
  if (v === null) {
    return colors.gray('null');
  }
  if (Array.isArray(v)) {
    const truncated = v.slice(0, 10);
    const str = truncated.map(x => pretty(x)).join(', ');
    if (v.length > 10) {
      return `[${str}, ${colors.gray(`...${v.length - 10} more`)}]`
    }
    return `[${str}]`;
  }
  if (typeof v === 'object') {
    return `{ ${Object.entries(v).map(x => `${x[0]}: ${pretty(x[1])}`).join(', ')} }`;
  }
  if (typeof v === 'number') {
    return colors.cyan(v);
  }
  if (typeof v === 'string') {
    if (v.length === 0) {
      return colors.gray("''");
    }
    const single_line = v.replaceAll('\n', colors.yellow('\\n'));
    if (stripAnsi(single_line).length > 100) {
      return colors.cyan(`'${single_line.slice(0, 100)}${colors.gray('...')}'`);
    }
    return colors.cyan(`'${colors.cyan(single_line)}'`);
  }
  if (typeof v === 'boolean') {
    if (v === true) {
      return colors.green('true');
    }
    return colors.red('false');
  }
}

export default {
  out: function () {
    process.stdout.write(colors.gray(`${global.line} <= `));
    process.stdout.write(pretty(global.v));
    process.stdout.write('\n');
    process.stdout.write(colors.gray('-> '));
    global.line++;
  },
  err: function (e) {
    process.stdout.write(`${colors.red('[e] ')}`);
    if (e instanceof Error) {
      process.stdout.write(e.message);
    } else {
      process.stdout.write(e);
    }
    process.stdout.write('\n');
  }
};