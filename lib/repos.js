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
    , obj  = {}

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
    let name  = splitRes(e.name)
      , m     = splitMeta(e.meta)
      , title = name.title
      , link  = e.link
      , stars = m.stars.replace('stars', '⭐️ ')
      , lang  = m.lang
      , idx   = i + 1
      , desc  = e.description ? e.description + '\n' : ''

    str += idx + ')' + title + '\n' + desc + handleLang(lang, name) + '• '
    str += stars + '\n' + chalk.cyan(link)
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
