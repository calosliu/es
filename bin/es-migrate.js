#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const program = require('commander');

program
  .version('0.0.1')
  .description('Description: Manage elastic search configuration migration.');

program
  .command('up')
  .description('migrate up, run all migrations by default')
  .option('-n, --name', 'migrate up to a specific migration')
  .option('-c, --count', 'migrate the number of migrations')
  .action(() => {
    console.log('up');
  });

program
  .command('down')
  .description('migrate down, run only one migration by default')
  .option('-n, --name', 'migrate up to a specific migration')
  .option('-c, --count', 'migrate the number of migrations')
  .action(() => {
    console.log('down');
  });

program
  .command('create <name>')
  .description('create new migration')
  .action(() => {
    console.log('create');
  });

program
  .command('list')
  .description('list all migrations')
  .option('-l, --local', 'list only local migrations')
  .option('-r, --remote', 'list only remote migrations');

program.parse(process.argv);

if (program.args.length === 0) {
  program.outputHelp();
}
