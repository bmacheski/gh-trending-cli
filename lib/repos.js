'use strict';

const trending  = require('node-gh-trending')
    , chalk     = require('chalk')
    , logUpdate = require('log-update')
    , Spinner   = require('elegant-spinner')
    , frame     =  Spinner();
    ;

function splitRes(res) {
  let spl = res.split('/');
  return {
    title: spl[1],
    author: ' ' + spl[0]
  }
}

function replaceStars(res) {
  return res.replace('stars', '⭐️ ');
}

function handleLang(lang, name) {
  if (!lang) {
    return ' • Written by' + name.author;
  } else {
    return ' • Written in ' + lang + ' by' + name.author;
  }
}

function splitMeta(res) {
  let splt = res.split('•');
  let obj = {};

  if (splt.length > 2) {
    obj['lang'] = splt[0].trim();
    obj['stars'] = splt[1].trim();
  } else {
    obj['stars'] = splt[0].trim();
  }
  return obj;
}

const getRepos = function() {
  let str = ' Trending Repositories\n';
  let timer = setInterval(function () {
    logUpdate(frame());
  }, 60);

   trending.findTopRepos((res) => {
    res.forEach((e, i) => {
      let name = splitRes(e.name);
      let m = splitMeta(e.meta);

      str += i + 1 + ')' +  name.title +  handleLang(m.lang, name) + '• ' + replaceStars(m.stars) + '\n' + chalk.cyan(e.description);
      (i < 24) ? str += '\n' : str;
    })
    clearInterval(timer);
    logUpdate.clear();
    console.log(str);
  })
}

module.exports = getRepos;
