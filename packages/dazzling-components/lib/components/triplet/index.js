"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 300;\n  margin: 2rem 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  display: flex;\n  max-width: 1100px;\n  font-size: 1.6rem;\n  h2 {\n  }\n  @media screen and (max-width: 600px) {\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 0.333333;\n  text-align: center;\n  padding: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Feature = _styledComponents.default.div(_templateObject());

var TripletContainer = _styledComponents.default.div(_templateObject2());

var Subtitle = _styledComponents.default.h2(_templateObject3(), function (_ref) {
  var brandSecondary = _ref.theme.brandSecondary;
  return brandSecondary;
});

var maybeLink = function maybeLink(link, Content) {
  if (link) {
    if (link.startsWith('http')) {
      return _react.default.createElement("a", {
        href: link
      }, _react.default.createElement(Content, null));
    }

    return _react.default.createElement(_gatsbyLink.default, {
      to: link
    }, _react.default.createElement(Content, null));
  }

  return _react.default.createElement(Content, null);
};

var Triplet = function Triplet(_ref2) {
  var features = _ref2.features;
  return _react.default.createElement(TripletContainer, null, features.map(function (_ref3, idx) {
    var image = _ref3.image,
        title = _ref3.title,
        content = _ref3.content,
        link = _ref3.link,
        topTitle = _ref3.topTitle,
        width = _ref3.width;
    return _react.default.createElement(Feature, {
      key: idx
    }, maybeLink(link, function () {
      return _react.default.createElement("div", null, topTitle && _react.default.createElement(Subtitle, null, title), _react.default.createElement("img", {
        src: image,
        width: width || 100
      }), !topTitle && _react.default.createElement(Subtitle, null, title), content && _react.default.createElement("p", null, content));
    }));
  }));
};

Triplet.propTypes = {
  features: _propTypes.default.arrayOf(_propTypes.default.object)
};
var _default = Triplet;
exports.default = _default;