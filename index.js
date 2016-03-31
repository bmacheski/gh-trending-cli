#!/usr/bin/env node

'use strict'

const yargs = require('yargs')

const repos = require('./lib/repos')
const devs = require('./lib/devs')
const help = require('./lib/help')

const argv = yargs.argv
const args = argv._
const helpArg = argv.help

function handleError () {
  console.error('Not a valid command. Type --help to view available commands.')
  process.exit(1)
}

if (args.length > 0) {
  let arg = args.toString().toLowerCase()
  let lang = yargs.argv.lang
  let time = yargs.argv.time

  if (lang && arg === 'repos' || arg === 'repositories') {
    repos.getReposByLang(lang, time)
  } else if (!lang && arg === 'repos' || arg === 'repositories') {
    repos.getRepos(time)
  } else if (arg === 'devs' || arg === 'developers') {
    devs.getDevs(time)
  } else {
    handleError()
  }
} else if (helpArg) {
  help.showHelp()
} else {
  handleError()
}
