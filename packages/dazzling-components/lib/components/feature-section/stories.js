"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonLinks = require("@storybook/addon-links");

var _brandedLink = _interopRequireDefault(require("../branded-link"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('FeatureSection', module).add('default', function () {
  return _react.default.createElement(_index.default, {
    style: {
      padding: 20,
      background: 'black'
    },
    imageStyle: {
      background: 'fuchsia'
    },
    contentStyle: {
      background: 'gray'
    },
    contentFlex: 0.5,
    image: "https://placehold.it/200x200",
    imageToTheRight: true
  }, _react.default.createElement("h2", null, "A feature title"), _react.default.createElement("p", null, "Some description"), _react.default.createElement(_brandedLink.default, {
    href: "getting-started"
  }, "Go"));
}).add('with-feature', function () {
  return _react.default.createElement(_index.default, {
    style: {
      padding: 20,
      background: 'black'
    },
    imageStyle: {
      background: 'fuchsia'
    },
    contentStyle: {
      background: 'gray'
    },
    contentFlex: 0.5,
    image: "https://placehold.it/200x200",
    imageToTheRight: true
  }, _react.default.createElement(_index.default.Feature, {
    title: "A title",
    link: {
      to: 'foobar',
      name: 'Foo'
    }
  }, "some description"));
});