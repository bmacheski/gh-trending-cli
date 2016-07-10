'use strict'

const trending = require('node-gh-trending')
    , chalk = require('chalk')
    , ora = require('ora')
    , help = require('./help')
    , spinner = ora('Fetching GitHub repositories...')

function splitRes (res) {
  let spl = res.split('/')

  return {
      title  : spl[1]
    , author : ' ' + spl[0]
  }
}

function handleLang (lang, name) {
  return !lang ? 'Written by' + name.author : 'Written in ' + lang + ' by' + name.author
}

function splitMeta (res) {
  let splt = res.split('•')
    , obj = {}

  obj.lang = splt[0].trim()

  if (splt.length > 2) {
    obj.stars = splt[1].trim()
  }

  return obj
}

function contructRes (res) {
  let str = '\n'

  res.forEach((e, i) => {
    let name = splitRes(e.name)
      , m = splitMeta(e.meta)
      , stars = m.stars ? m.stars.replace('stars', '⭐️ ') : ''
      , desc = e.description ? e.description  + '\n' : ''
      , idx = i + 1
      , space = m.stars ? '• ' : ''

    str += idx + ')'+ name.title + '\n'
      + desc
      + handleLang(m.lang, name) + space + stars + '\n'
      + chalk.green(e.link) + '\n'

    if (idx < 25) str += '\n'
  })

  spinner.stop()
  str ? console.log(str) : console.log(help.showMessage())
}

const cb = res => contructRes(res)

module.exports.getRepos = function (time) {
  spinner.start()
  time ? trending.findRepos(time, cb) : trending.findRepos(cb)
}

module.exports.getReposByLang = function (lang, time) {
  spinner.start()
  time ? trending.findRepos(lang, time, cb) : trending.findRepos(lang, cb)
}
