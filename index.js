#!/usr/bin/env node

'use strict'

const yargs = require('yargs')
  , repos   = require('./lib/repos')
  , devs    = require('./lib/devs')
  , help    = require('./lib/help')

const args = yargs.argv._

function handleError () {
  console.error('Not a valid command. Type --help to view available commands.')
  process.exit(1)
}

if (args.length) {
  let arg  = args.toString().toLowerCase()
    , lang = yargs.argv.lang
    , time = yargs.argv.time

  if (lang && arg === 'repos' || arg === 'repositories') {
    repos.getReposByLang(lang, time)
  } else if (!lang && arg === 'repos' || arg === 'repositories') {
    repos.getRepos(time)
  } else if (arg === 'devs' || arg === 'developers') {
    devs.getDevs(time)
  } else {
    handleError()
  }
} else if (yargs.argv.help) {
  help.showHelp()
} else {
  handleError()
}
