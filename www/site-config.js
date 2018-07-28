const createConfig = require('dazzling-components/lib/create-config')
const github = 'https://github.com/jondot/dazzling'

module.exports = createConfig({
  pathPrefix: '/dazzling',
  name: 'Dazzling',
  pitch: 'A sparkly website generator based on Gatsby.',
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
      image: 'simple.svg',
      title: 'Unlimited Creativity.',
      content:
        'Build with Dazzling components or make new ones with React and Styled Components.'
    },
    {
      image: 'scalable.svg',
      title: 'Full Automation.',
      content:
        'Generate, install, and go. Even exports your logo from the included Sketch file.'
    },
    {
      image: 'fast.svg',
      title: 'Gatsby at the Core.',
      content:
        'Dazzling grows with you. Use anything from the amazing Gatsby ecosystem.'
    }
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
