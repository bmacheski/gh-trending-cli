#!/usr/bin/env node

'use strict'

const yargs = require('yargs')
const repos = require('./lib/repos')
const devs = require('./lib/devs').getDevs
const help = require('./lib/help')

const argv = yargs.argv
const args = argv._
const helpArg = argv.help

if (args.length > 0) {
  let arg = args.toString().toLowerCase()
  let lang = argv.lang
  let time = argv.time

  if (lang && arg === 'repos' || arg === 'repositories') {
    repos.getReposByLang(lang, time)
  } else if (!lang && arg === 'repos' || arg === 'repositories') {
    repos.getRepos(time)
  } else if (arg === 'devs' || arg === 'developers') {
    devs(time)
  } else {
    console.error('Not a valid argument.')
    process.exit(1)
  }
} else if (helpArg) {
  help.showHelp()
} else {
  console.error('Not a valid command. Type --help to view available commands.')
}
