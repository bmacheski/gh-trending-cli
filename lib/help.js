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
    --time [time]        Fetch trending daily, weekly or monthly repos / devs

  Examples
    $ trending devs
    $ trending repos
    $ trending repos --lang javascript
    $ trending devs --time weekly
    $ trending repos --lang javascript --time weekly
  `

  console.log(help)
}

module.exports = {
  showHelp: showHelp
}
