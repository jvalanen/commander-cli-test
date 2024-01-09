#!/usr/bin/env node

const { program } = require('commander');

const bootstrap = async () => {

  program
    .version('0.0.1')
    .description('Execute Diograph commands from CLI')
    .usage('<commandit> [optionssit]')
    .helpOption('-h, --help', 'Output usage information.')
    .option('--dry-run', 'Dry run')
    .action((opts) => {
      if (opts['dryRun']) {
        console.log('Dry run completed.')
        return
      }
    })

  // Create
  program
    .command('create <room|diory>')
    .alias('c')
    .description('this is description')
    .action((joo) => { console.log('create' + joo)})

  // Delete
  program
    .command('delete <room|diory>')
    .alias('d')
    .description('this is description')
    .action((joo) => { console.log('delete' + joo)})

  program.parse();

  const options = program.opts();

  if (!program.args) {
    console.log('Command not provided to testApp(), please provide one')
    process.exit(1)
  }

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  } else {
    console.log('Unknown command.')    
  }
}

bootstrap()
