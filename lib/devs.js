'use strict'

const trending = require('node-gh-trending')
    , ora = require('ora')
    , help = require('./help')
    , spinner = ora('Fetching GitHub developers...')

module.exports.getDevs = function (time) {
  spinner.start()

  let cb = res => {
    let str = ''

    res.forEach((e, i) => {
      let s = i + 1 + ') ' + e.name

      i < 24 ? str += s + '\n' : str += s
    })

    spinner.stop()
    str ? console.log(str) : console.log(help.showMessage())
  }

  time ? trending.findDevs(time, cb) : trending.findDevs(cb)
}
