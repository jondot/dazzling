<h3 align="center">
  <img src="https://raw.githubusercontent.com/jondot/dazzling/master/media/dazzling.png" alt="dazzling logo" />
</h3>

[![build status](https://img.shields.io/travis/jondot/dazzling/master.svg)](https://travis-ci.org/jondot/dazzling)
[![npm version](https://img.shields.io/npm/v/dazzling.svg)](https://www.npmjs.com/package/dazzling)

Dazzling is a project website generator based on Gatsby and React that's simple, quick, and extensible.

## Features

✅ Generate full project websites quickly with `dazzling site new`  
✅ Configuration driven - a single configuration for the whole site  
✅ Use existing components from `dazzling-components` or make your own  
✅ Automate everything - Dazzling exports all images from a single sketch asset.  
✅ Fancy documentation with Markdown  
✅ Full text search with [Algolia](https://www.algolia.com/)  
✅ Google Fonts and Google Analytics integration  
✅ Automatic "Features" and "Used by" components from configuration  
✅ Fully responsive for mobile

## Quick Start

As simple as this:

```
$ cd your-project
$ yarn add -D dazzling
$ yarn dazzling site new
? What's your project name? Bamboo
? Project tagline? The scalable wood
? Github repo? https://github.com/fixme/fixme
? Website? https://fixme.io
? Google Analytics ID? UA-FIX-ME-XXXXX
? Your name? (for copyright) Chuck Woody
Loaded templates: _templates
         added: www/static/CNAME
         added: www/site-config.js
$ cd www && yarn && yarn start
```
Check out [the documentation](https://jondot.github.io/dazzling/) to get started.

# Contributing

Fork, implement, add tests, pull request, get my everlasting thanks and a respectable place here :).

### Thanks:

To all [Contributors](https://github.com/jondot/dazzling/graphs/contributors) - you make this happen, thanks!

# Copyright

Copyright (c) 2018 Dotan Nahum, [@jondot](http://twitter.com/jondot). See [LICENSE](LICENSE.txt) for further details.
