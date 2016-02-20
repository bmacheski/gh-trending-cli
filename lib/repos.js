'use strict'

const trending = require('node-gh-trending')
const chalk = require('chalk')
const logUpdate = require('log-update')
const Spinner = require('elegant-spinner')
const frame = Spinner()

function splitRes (res) {
  let spl = res.split('/')
  return {
    title: spl[1],
    author: ' ' + spl[0]
  }
}

function handleLang (lang, name) {
  if (!lang) {
    return ' • Written by' + name.author
  } else {
    return ' • Written in ' + lang + ' by' + name.author
  }
}

function splitMeta (res) {
  let splt = res.split('•')
  let obj = {}

  if (splt.length > 2) {
    obj['lang'] = splt[0].trim()
    obj['stars'] = splt[1].trim()
  } else {
    obj['stars'] = splt[0].trim()
  }
  return obj
}

function startSpinner () {
  let timer = setInterval(function () {
    logUpdate(frame())
  }, 60)
  return timer
}

function contructRes (res, timer) {
  let str = ''
  res.forEach((e, i) => {
    let name = splitRes(e.name)
    let m = splitMeta(e.meta)
    let starz = m.stars.replace('stars', '⭐️ ')
    let idx = i + 1
    str += idx + ')' + name.title + handleLang(m.lang, name) + '• ' + starz
    if (e.description.length > 0) {
      str += '\n' + chalk.cyan(e.description)
    }
    if (idx < 25) str += '\n'
  })

  clearInterval(timer)
  logUpdate.clear()
  console.log(str)
}

const getRepos = function () {
  let timer = startSpinner()
  trending.findTopRepos((res) => {
    contructRes(res, timer)
  })
}

const getReposByLang = function (lang) {
  let timer = startSpinner()
  trending.findReposByLang(lang, (res) => {
    contructRes(res, timer)
  })
}

module.exports = {
  getRepos: getRepos,
  getReposByLang: getReposByLang
}
