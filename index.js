#!/usr/bin/env node

'use strict';

const yargs  = require('yargs')
  , repos    = require('./lib/repos')
  , devs     = require('./lib/devs')
  ;

const argv  = yargs.argv
  , args    = argv._
  ;

if (args.length > 0) {
  let arg = args.toString().toLowerCase();
  let lang = argv.lang;
  if (arg === 'repos' || arg === 'repositories' && lang) {
    repos.getReposByLang(lang);
  }
  else if (arg === 'repos' || arg === 'repositories' && !lang) {
    repos.getRepos();
  }
  else if (arg === 'devs' || arg === 'developers') {
    devs();
  } else {
    console.error('Not a valid argument.');
    process.exit(1);
  }
}
