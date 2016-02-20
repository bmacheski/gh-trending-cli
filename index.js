#!/usr/bin/env node

'use strict'

const yargs = require('yargs')
const repos = require('./lib/repos')
const devs = require('./lib/devs')
const help = require('./lib/help')

const argv = yargs.argv
const args = argv._
const helpArg = argv.help

if (args.length > 0) {
  let arg = args.toString().toLowerCase()
  let lang = argv.lang

  if (arg === 'repos' || arg === 'repositories' && lang) {
    repos.getReposByLang(lang)
  } else if (arg === 'repos' || arg === 'repositories' && !lang) {
    repos.getRepos()
  } else if (arg === 'devs' || arg === 'developers') {
    devs()
  } else {
    console.error('Not a valid argument.')
    process.exit(1)
  }
} else if (helpArg) {
  help.showHelp()
} else {
  console.error('Not a valid command. Type --help to view available commands.')
}
