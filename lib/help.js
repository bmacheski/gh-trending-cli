'use strict'

const showHelp = function () {
  let help = `
  Usage
    $ trending [command] [options]
  Commands
    repos                Get todays trending repos
    devs                 Get todays trending developers

  Options
    --lang [language]    Get todays trending repos in a particular language

  Examples
    $ trending devs
    $ trending repos
    $ trending repos --lang javascript
  `

  console.log(help)
}

module.exports = {
  showHelp: showHelp
}
