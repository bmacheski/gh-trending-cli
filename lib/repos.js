'use strict'

const trending = require('node-gh-trending')
  , chalk      = require('chalk')
  , ora        = require('ora')
  , spinner    = ora('Fetching GitHub repositories...')

function splitRes (res) {
  let spl = res.split('/')

  return {
      title  : spl[1]
    , author : ' ' + spl[0]
  }
}

function handleLang (lang, name) {
  return (!lang)
  ? 'Written by' + name.author
  : 'Written in ' + lang + ' by' + name.author
}

function splitMeta (res) {
  let splt = res.split('•')
  , obj    = {}

  if (splt.length > 2) {
    obj['lang']  = splt[0].trim()
    obj['stars'] = splt[1].trim()
  } else {
    obj['stars'] = splt[0].trim()
  }
  return obj
}

function contructRes (res) {
  let str = ''

  res.forEach((e, i) => {
    let name = splitRes(e.name)
    , m      = splitMeta(e.meta)
    , link   = e.link
    , stars  = m.stars.replace('stars', '⭐️ ')
    , idx    = i + 1

    str += idx + ')' + name.title + '\n' + chalk.cyan(handleLang(m.lang, name)) + '• ' + stars

    if (e.description.length > 0) str += '\n' + e.description  + '\n' + chalk.cyan(link)
    if (idx < 25) str += '\n'
  })

  spinner.stop()
  console.log(str)
}

const cb = (res) => { contructRes(res) }

const getRepos = function (time) {
  spinner.start()
  time ? trending.findRepos(time, cb) : trending.findRepos(cb)
}

const getReposByLang = function (lang, time) {
  spinner.start()
  time ? trending.findRepos(lang, time, cb) : trending.findRepos(lang, cb)
}

module.exports = {
    getRepos       : getRepos
  , getReposByLang : getReposByLang
}
