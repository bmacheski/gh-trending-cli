'use strict'

module.exports.showHelp = function () {
  let help = `
  Usage
    $ gh-trending [command] [options]
  Commands
    repos                Get todays trending repos
    devs                 Get todays trending developers

  Options
    --lang [language]    Get todays trending repos in a particular language
    --time [time]        Fetch trending daily, weekly or monthly repos / devs

  Examples
    $ gh-trending devs
    $ gh-trending repos
    $ gh-trending repos --lang javascript
    $ gh-trending devs --time weekly
    $ gh-trending repos --lang javascript --time weekly
  `

  console.log(help)
}
