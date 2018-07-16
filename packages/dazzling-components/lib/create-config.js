"use strict";

module.exports = ({
  name,
  pitch,
  github,
  logo,
  siteUrl,
  docsDir,
  googleAnalyticsID,
  docSearch,
  nav,
  usedInText,
  usedIn,
  features,
  featuresText,
  copyright,
  sections,
  theme,
  googleFonts
}) => ({
  pitch,
  name,
  github,
  logo,
  docsDir,
  siteTitle: name,
  // Site title.
  siteTitleAlt: `${name} - ${pitch}`,
  // Alternative site title for SEO.
  siteLogo: '/logo-meta.png',
  // Logo used for SEO and manifest.
  siteUrl,
  pathPrefix: '/',
  // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: `${name} - ${pitch}`,
  // Website description used for RSS feeds/meta description tag.
  googleAnalyticsID,
  googleFonts: googleFonts || ['Source Sans Pro:300,400,700'],
  docSearch,
  nav,
  usedInText,
  usedIn,
  features,
  featuresText,
  copyright,
  // TODO: Move this literally anywhere better.
  toCSections: ['', ...sections],
  // Used to generate the Table Of Contents. Index 0 should be blank.
  theme
});