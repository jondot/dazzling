"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

module.exports = function (_ref) {
  var name = _ref.name,
      pathPrefix = _ref.pathPrefix,
      pitch = _ref.pitch,
      github = _ref.github,
      logo = _ref.logo,
      siteUrl = _ref.siteUrl,
      docsDir = _ref.docsDir,
      googleAnalyticsID = _ref.googleAnalyticsID,
      docSearch = _ref.docSearch,
      nav = _ref.nav,
      usedInText = _ref.usedInText,
      usedIn = _ref.usedIn,
      features = _ref.features,
      featuresText = _ref.featuresText,
      copyright = _ref.copyright,
      sections = _ref.sections,
      theme = _ref.theme,
      googleFonts = _ref.googleFonts;
  return {
    pitch: pitch,
    name: name,
    github: github,
    logo: logo,
    docsDir: docsDir,
    siteTitle: name,
    // Site title.
    siteTitleAlt: "".concat(name, " - ").concat(pitch),
    // Alternative site title for SEO.
    siteLogo: '/logo-meta.png',
    // Logo used for SEO and manifest.
    siteUrl: siteUrl,
    pathPrefix: pathPrefix || '/',
    // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    siteDescription: "".concat(name, " - ").concat(pitch),
    // Website description used for RSS feeds/meta description tag.
    googleAnalyticsID: googleAnalyticsID,
    googleFonts: googleFonts || ['Source Sans Pro:300,400,700'],
    docSearch: docSearch,
    nav: nav,
    usedInText: usedInText,
    usedIn: usedIn,
    features: features,
    featuresText: featuresText,
    copyright: copyright,
    // TODO: Move this literally anywhere better.
    toCSections: [''].concat(_toConsumableArray(sections)),
    // Used to generate the Table Of Contents. Index 0 should be blank.
    theme: theme
  };
};