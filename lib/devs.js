'use strict'

const trending = require('node-gh-trending')
    , ora      = require('ora')
    , spinner  = ora('Fetching GitHub developers...')

module.exports.getDevs = function (time) {
  spinner.start()

  let cb = (res) => {
    let str = ''

    res.forEach((e, i) => {
      (i < 24)
      ? str += (i + 1 + ') ' + e.name + '\n')
      : str += (i + 1 + ') ' + e.name)
    })

    spinner.stop()
    console.log(str)
  }

  time ? trending.findDevs(time, cb) : trending.findDevs(cb)
}
