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
      name: 'Home',
      to: '/'
    },
    {
      name: 'Docs',
      to: 'quick-start',
      primary: 'Get Started'
    },
    { name: 'Github', secondary: 'Github', href: github }
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
    {
      topTitle: true,
      image: 'node.svg',
      width: 95,
      title: 'Express.js',
      link: 'express'
    },
    {
      topTitle: true,
      image: 'react.svg',
      width: 175,
      title: 'React Native',
      link: 'react-native'
    }
  ],
  featuresText: 'Build Dazzling Sites',
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
