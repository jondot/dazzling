const createConfig = require('dazzling-components/lib/create-config')
const github = 'https://github.com/jondot/hygen'

module.exports = createConfig({
  name: 'Hygen',
  pitch: 'The scalable code generator that saves you time.',
  github,
  logo: 'logo.svg',
  siteUrl: 'https://www.hygen.io',
  googleAnalyticsID: 'UA-7131053-23', // GA tracking ID.

  docsDir: `${__dirname}/../content`,
  sections: require('../content/docs/sections.json').sections,
  docSearch: {
    apiKey: '8eb34147bbf73c81783f18b42ce01614',
    indexName: 'hygen',
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
      primary: 'Quick Start'
    },
    { name: 'Github', secondary: 'Github', href: github }
  ],
  usedInText: 'See how to use with:',
  usedIn: [
    {
      topTitle: true,
      image: 'redux.svg',
      width: 100,
      title: 'Redux',
      link: 'redux'
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
  features: [
    {
      image: 'simple.svg',
      title: 'Simplicity is Key',
      content:
        'Generators are self-contained and folder structure makes up the command structure. Complex is easy but simple is hard.'
    },
    {
      image: 'scalable.svg',
      title: 'Scales With Any Team',
      content:
        'Contextual template lookup, pull requests that look nice and clean, structured file organization, make generators fun again!'
    },
    {
      image: 'fast.svg',
      title: 'Fast is a Feature',
      content:
        'Constantly benchmarked and dependencies are carefully considered to shorten startup and generation time.'
    }
  ],
  copyright: 'Copyright © 2018. Dotan Nahum', // Copyright string for the footer of the website and RSS feed.
  theme: {
    // named colors:
    background: '#fff',
    brand: '#F722B1',
    brandSecondary: '#8b8f94',
    ink: '#3a5975',
    inkDark: '#35495E',
    inkLight: '#f9fbfd',
    inkSelected: '#2097e4',
    // content width:
    contentWidthLaptop: '680px',
    sitePadding: '20px'
  }
})
