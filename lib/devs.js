'use strict'

const trending = require('node-gh-trending')
const ora = require('ora')
const spinner = ora('Fetching GitHub developers...')

const getDevs = function (time) {
  spinner.start()

  let cb = (res) => {
    let str = ' Trending Developers \n'

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

module.exports = {
  getDevs: getDevs
}
