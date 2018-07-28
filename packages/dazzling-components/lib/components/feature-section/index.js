"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _brandedLink = _interopRequireDefault(require("../branded-link"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: ", ";\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FeatureSection = function FeatureSection(_ref) {
  var image = _ref.image,
      imageStyle = _ref.imageStyle,
      imageToTheRight = _ref.imageToTheRight,
      children = _ref.children,
      contentStyle = _ref.contentStyle,
      style = _ref.style,
      contentFlex = _ref.contentFlex;

  var img = _react.default.createElement(Image, {
    contentFlex: contentFlex
  }, _react.default.createElement("img", {
    src: image,
    style: imageStyle
  }));

  return _react.default.createElement(Container, {
    style: style
  }, !imageToTheRight && img, _react.default.createElement(Content, {
    style: contentStyle,
    contentFlex: contentFlex
  }, children), imageToTheRight && img);
};

FeatureSection.Feature = function (_ref2) {
  var title = _ref2.title,
      children = _ref2.children,
      link = _ref2.link;
  return _react.default.createElement("div", null, _react.default.createElement("h2", null, title), _react.default.createElement("p", null, children), _react.default.createElement(_brandedLink.default, {
    href: link.to
  }, link.name));
};

var Image = _styledComponents.default.div(_templateObject(), function (_ref3) {
  var _ref3$contentFlex = _ref3.contentFlex,
      contentFlex = _ref3$contentFlex === void 0 ? 0.7 : _ref3$contentFlex;
  return 1 - contentFlex;
});

var Content = _styledComponents.default.div(_templateObject2(), function (_ref4) {
  var _ref4$contentFlex = _ref4.contentFlex,
      contentFlex = _ref4$contentFlex === void 0 ? 0.7 : _ref4$contentFlex;
  return contentFlex;
});

var Container = _styledComponents.default.div(_templateObject3());

var _default = FeatureSection;
exports.default = _default;