---
title: Configuration
doc: 2
section: 1
category: "tech"
type: "doc"
---

Dazzling places your website configuration in `site-config.js`. This is where you personalize all aspects of the Dazzling website, without taking advantage of building new features in React (we'll get to that!).

In other words, if you want something quick, you can edit `site-config.js` and be done with it.

Here it is, with some extra content abbreviated:

```js
const createConfig = require('dazzling-components/lib/create-config')
const github = 'https://github.com/jondot/dazzling'

module.exports = createConfig({
  name: 'Dazzling',
  pitch: 'An open source all-in-one project website generator based on Gatsby.',
  github,
  logo: 'logo.svg',
  siteUrl: 'http://www.dazzling.io',
  googleAnalyticsID: 'UA-FIX-ME-XXXXX', // GA tracking ID.

  docsDir: `${__dirname}/../content`,
  sections: require('../content/docs/sections.json').sections,
  googleFonts: ['Open Sans:400,700', 'Muli:300,900'],

  // algolia full text search
  docSearch: {
    apiKey: 'xxxxxx',
    indexName: 'fixme',
    inputSelector: '#algolia-doc-search',
    debug: false // Set debug to true if you want to inspect the dropdown
  },

  nav: [
    {
      name: 'Docs',
      to: 'getting-started',
      primary: 'Get Started'
    },
  ],
  usedInText: 'Powered by Dazzling',
  usedIn: [
    {
      topTitle: true,
      image: 'hygen.svg',
      width: 100,
      title: 'Hygen',
      link: 'https://www.hygen.io'
    },
  ],
  featuresText: 'Build Dazzling Sites',
  features: [
    {
      image: 'simple.svg',
      title: 'Unlimited Creativity.',
      content:
        'Build with Dazzling components or make new ones with React and Styled Components.'
    },
  ],
  copyright: 'Copyright © 2018. Dotan Nahum',
  theme: {
    // named colors:
    titleFontFamily: 'Muli',
    background: '#fff',
    brand: '#408AFA',
    brandSecondary: '#8b8f94',
    ink: '#333',
    inkDark: '#35495E',
    inkLight: '#f9fbfd',
    inkSelected: '#2097e4',
    // content width:
    contentWidthLaptop: '680px',
    sitePadding: '20px'
  }
})
```

We recommend experimenting with these settings and if any doubt, take a look [at the source](https://github.com/jondot/dazzling/blob/master/packages/dazzling-components/src/create-config.js)

If you want to set up documentation for your site (it's on by default) check out [Docs](docs).