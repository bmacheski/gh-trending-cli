'use strict'

const trending = require('node-gh-trending')
const logUpdate = require('log-update')
const Spinner = require('elegant-spinner')
const frame = Spinner()

const getDevs = function () {
  let timer = setInterval(() => {
    logUpdate(frame())
  }, 50)

  trending.findTopDevs((res) => {
    let str = ' Trending Developers \n'

    res.forEach((e, i) => {
      (i < 24)
      ? str += (i + 1 + ') ' + e.name + '\n')
      : str += (i + 1 + ') ' + e.name)
    })

    clearInterval(timer)
    logUpdate.clear()
    console.log(str)
  })
}

module.exports = {
  getDevs: getDevs
}
