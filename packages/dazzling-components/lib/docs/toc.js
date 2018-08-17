"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 1rem;\n  h6 {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  h6,\n  p {\n    color: ", ";\n    margin: 0;\n    line-height: 1.5;\n  }\n  li {\n    margin: 0;\n  }\n  &:hover {\n    li {\n      span {\n        border-bottom: 1px solid black;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n\n  & > ul,\n  .sectionItems {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  p,\n  h6 {\n    display: inline-block;\n    font-weight: normal;\n    margin: 0;\n  }\n\n  .tocHeading {\n    font-size: 1.6rem;\n    font-weight: bold;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableOfContents =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableOfContents, _React$Component);

  function TableOfContents() {
    _classCallCheck(this, TableOfContents);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableOfContents).apply(this, arguments));
  }

  _createClass(TableOfContents, [{
    key: "buildNodes",
    value: function buildNodes() {
      var posts = this.props.posts;
      var type = this.props.contentsType;
      var postNodes = [];
      posts.forEach(function (post) {
        if (post.node.frontmatter.type === type) {
          var postNode = {
            title: post.node.frontmatter.title,
            path: post.node.fields.slug,
            docNumber: post.node.frontmatter.doc,
            section: post.node.frontmatter.section
          };
          postNodes.push(postNode);
        }
      });
      var postNodeSections = [];
      postNodes.forEach(function (post) {
        if (postNodeSections[post.section]) {
          postNodeSections[post.section].push(post);
        } else {
          postNodeSections[post.section] = [post];
        }
      });
      postNodeSections.forEach(function (section) {
        section.sort(function (a, b) {
          return a.docNumber > b.docNumber;
        });
      });
      return postNodeSections;
    }
  }, {
    key: "nodeListItems",
    value: function nodeListItems() {
      var _this = this;

      var postNodeSections = this.buildNodes();
      var sectionTitles = this.props.sectionTitles;
      var listItems = postNodeSections.map(function (section, idx) {
        return _react.default.createElement("li", {
          key: idx,
          className: "section"
        }, _react.default.createElement("h5", {
          className: "tocHeading docSearch-lvl0"
        }, sectionTitles[idx]), _react.default.createElement("ul", {
          className: "sectionItems"
        }, section.map(function (node) {
          return _react.default.createElement(DocContainer, {
            key: node.path
          }, _react.default.createElement(_gatsbyLink.default, {
            to: node.path
          }, _react.default.createElement(OffsetLi, {
            selected: _this.props.location && _this.props.location.pathname.match(node.path + '$')
          }, _react.default.createElement("h6", null, node.title))));
        })));
      });
      return listItems;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(TableOfContentsContainer, null, _react.default.createElement("ul", null, this.nodeListItems()));
    }
  }]);

  return TableOfContents;
}(_react.default.Component);

var TableOfContentsContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.sitePadding;
});

var DocContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.ink;
});

var OffsetLi = _styledComponents.default.li(_templateObject3(), function (_ref) {
  var selected = _ref.selected,
      _ref$theme = _ref.theme,
      ink = _ref$theme.ink,
      inkSelected = _ref$theme.inkSelected;
  return selected ? inkSelected : ink;
});

var _default = TableOfContents;
exports.default = _default;