"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonLinks = require("@storybook/addon-links");

var _history = require("history");

var _reactRouter = require("react-router");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const history = (0, _history.createMemoryHistory)();
(0, _react2.storiesOf)('Button', module).add('default', () => _react.default.createElement(_reactRouter.Router, {
  history: history
}, _react.default.createElement(_index.default, null, "Go")));