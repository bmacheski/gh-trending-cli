'use strict';

const trending  = require('node-gh-trending')
   , logUpdate  = require('log-update')
   , Spinner    = require('elegant-spinner')
   , frame      = Spinner()
   ;

const getDevs = function() {
  let timer = setInterval(function () {
    logUpdate(frame());
  }, 50);
  trending.findTopDevs((res) => {
    let str = ' Trending Developers \n';
    res.forEach((e, i) => {
      (i < 24) ? str += (i + 1 + ') ' + e.name + '\n') : str += (i + 1 + ') ' + e.name )
    })
    clearInterval(timer);
    logUpdate.clear();
    console.log(str);
  });
}

module.exports = getDevs;
