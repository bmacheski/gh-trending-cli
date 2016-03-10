# gh-trending-cli

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

```
Usage
  $ gh-trending [command] [options]
Commands
  repos                Get todays trending repositories
  devs                 Get todays trending developers

Options
  --lang [language]    Get todays trending repositories in a particular language
  --time [time]        Get 'weekly' or 'montly' trending repos -- default is  'daily'
Examples
  $ gh-trending devs --time monthly
  $ gh-trending repos
  $ gh-trending repos --lang javascript --time weekly
```

## Related
[node-gh-trending](https://github.com/bmacheski/node-gh-trending) - API for this module
