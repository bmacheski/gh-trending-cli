# gh-trending-cli

![screen shot 2016-04-03 at 12 27 01 pm](https://cloud.githubusercontent.com/assets/7670539/14233785/8ef60fc0-f997-11e5-9200-1f397a30a612.png)

## Install

```
$ npm install -g gh-trending-cli
```

## Usage

```
  $ gh-trending [command] [options]

Commands
  repos                Get todays trending repositories
  devs                 Get todays trending developers

Options
  --lang [language]    Get todays trending repositories in a particular language
  --time [time]        Get 'weekly' or 'monthly' trending repos -- the default is 'daily'

Examples
  $ gh-trending devs --time monthly
  $ gh-trending repos
  $ gh-trending repos --lang javascript --time weekly
```

## Related

[node-gh-trending](https://github.com/bmacheski/node-gh-trending) - API for this module
