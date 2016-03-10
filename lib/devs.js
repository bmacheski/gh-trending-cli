'use strict'

const trending = require('node-gh-trending')
const logUpdate = require('log-update')
const Spinner = require('elegant-spinner')
const frame = Spinner()

const getDevs = function (time) {
  let t = setInterval(() => {
    logUpdate(frame())
  }, 60)

  let cb = (res) => {
    let str = ' Trending Developers \n'

    res.forEach((e, i) => {
      (i < 24)
      ? str += (i + 1 + ') ' + e.name + '\n')
      : str += (i + 1 + ') ' + e.name)
    })

    clearInterval(t)
    logUpdate.clear()
    console.log(str)
  }

 time ? trending.findDevs(time, cb) : trending.findDevs(cb)
}

module.exports = {
  getDevs: getDevs
}
