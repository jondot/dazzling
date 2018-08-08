const createConfig = require('dazzling-components/lib/create-config')
const github = 'https://github.com/jondot/dazzling'

module.exports = createConfig({
  pathPrefix: '/dazzling',
  name: 'Dazzling',
  pitch: 'A sparkly website generator.',
  github,
  logo: 'logo.svg',
  siteUrl: 'http://jondot.github.io',
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
      name: 'Home',
      to: '/'
    },
    {
      name: 'Docs',
      to: '/getting-started',
      primary: 'Get Started'
    },
    { name: 'Github', secondary: 'Github', href: github }
  ],
  usedInText: 'Made with Dazzling',
  usedIn: [
    {
      topTitle: true,
      image: 'hygen.svg',
      width: 100,
      title: 'Hygen',
      link: 'https://www.hygen.io'
    },
  ],
  features: [
    {
      image: 'battery.svg',
      width: 54,
      title: 'Batteries Included.',
      content:
        'Touch and go. A Dazzling website with documentation takes a single command.'
    },
    {
      image: 'extensible.svg',
      width: 90,
      title: 'Simple Extensibility.',
      content:
        'Use the Dazzling component library to tweak, change, and add pages.'
    },
    {
      image: 'react.svg',
      width: 120,
      title: 'React at The Core',
      content:
        'Dazzling is Gatsby powered, and uses React and Styled Components.'
    }
  ],
  copyright: 'Copyright © 2018. Dotan Nahum',
  theme: {
    // named colors:
    titleFontFamily: 'Muli',
    background: '#fff',
    brand: '#EF0D0D',
    brandSecondary: '#8b8f94',
    borderColor: '#fff',
    ink: '#333',
    inkDark: '#35495E',
    inkLight: '#fff',
    inkSelected: '#EF0D0D',
    // content width:
    contentWidthLaptop: '680px',
    sitePadding: '20px'
  }
})
