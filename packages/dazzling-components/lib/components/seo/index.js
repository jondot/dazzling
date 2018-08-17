"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SEO =
/*#__PURE__*/
function (_Component) {
  _inherits(SEO, _Component);

  function SEO() {
    _classCallCheck(this, SEO);

    return _possibleConstructorReturn(this, _getPrototypeOf(SEO).apply(this, arguments));
  }

  _createClass(SEO, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          postNode = _this$props.postNode,
          postPath = _this$props.postPath,
          postSEO = _this$props.postSEO,
          siteTitle = _this$props.siteTitle,
          siteTitleAlt = _this$props.siteTitleAlt,
          siteUrl = _this$props.siteUrl,
          pathPrefix = _this$props.pathPrefix,
          siteDescription = _this$props.siteDescription,
          siteFBAppID = _this$props.siteFBAppID,
          userTwitter = _this$props.userTwitter,
          siteLogo = _this$props.siteLogo;
      var title;
      var description;
      var image;
      var postURL;

      if (postSEO) {
        var postMeta = postNode.frontmatter;
        title = postMeta.title;
        description = postMeta.description ? postMeta.description : postNode.excerpt;
        image = postMeta.cover;
        postURL = "".concat(siteUrl).concat(pathPrefix).concat(postPath);
      } else {
        title = siteTitle;
        description = siteDescription;
        image = siteLogo;
      }

      var realPrefix = pathPrefix === '/' ? '' : pathPrefix;
      image = "".concat(siteUrl).concat(realPrefix).concat(image);
      var blogURL = "".concat(siteUrl).concat(pathPrefix);
      var schemaOrgJSONLD = [{
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName: siteTitleAlt || ''
      }];

      if (postSEO) {
        schemaOrgJSONLD.push([{
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [{
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image: image
            }
          }]
        }, {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName: siteTitleAlt || '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image
          },
          description: description
        }]);
      }

      return _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("meta", {
        name: "description",
        content: description
      }), _react.default.createElement("meta", {
        name: "image",
        content: image
      }), _react.default.createElement("script", {
        type: "application/ld+json"
      }, JSON.stringify(schemaOrgJSONLD)), _react.default.createElement("meta", {
        property: "og:url",
        content: postSEO ? postURL : blogURL
      }), postSEO ? _react.default.createElement("meta", {
        property: "og:type",
        content: "article"
      }) : null, _react.default.createElement("meta", {
        property: "og:title",
        content: title
      }), _react.default.createElement("meta", {
        property: "og:description",
        content: description
      }), _react.default.createElement("meta", {
        property: "og:image",
        content: image
      }), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: siteFBAppID || ''
      }), _react.default.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), _react.default.createElement("meta", {
        name: "twitter:creator",
        content: userTwitter || ''
      }), _react.default.createElement("meta", {
        name: "twitter:title",
        content: title
      }), _react.default.createElement("meta", {
        name: "twitter:description",
        content: description
      }), _react.default.createElement("meta", {
        name: "twitter:image",
        content: image
      }));
    }
  }]);

  return SEO;
}(_react.Component);

_defineProperty(SEO, "propTypes", {
  postNode: _propTypes.default.string,
  postPath: _propTypes.default.string,
  postSEO: _propTypes.default.string,
  siteTitle: _propTypes.default.string,
  siteTitleAlt: _propTypes.default.string,
  siteUrl: _propTypes.default.string,
  pathPrefix: _propTypes.default.string,
  siteDescription: _propTypes.default.string,
  siteFBAppID: _propTypes.default.string,
  userTwitter: _propTypes.default.string,
  siteLog: _propTypes.default.string
});

var _default = SEO;
exports.default = _default;