#!/usr/bin/env node

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const nextArg = args[i + 1];
      if (nextArg && !nextArg.startsWith('-')) {
        result[key] = nextArg;
        i++;  // Skip next arg as value
      } else {
        result[key] = true;
      }
    }
  }
  return result;
}

const parsed = parseArgs();
console.log('Parsed args:', parsed);

if (parsed.a !== undefined) {
  const valueA = isNaN(parsed.a) ? parsed.a : parseInt(parsed.a, 10);
  console.log(`Value of --a: ${valueA}`);
  // Add your logic here, e.g., process with valueA
} else {
  console.log('No --a provided');
}
