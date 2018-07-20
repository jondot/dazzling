"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class SEO extends _react.Component {
  render() {
    const _this$props = this.props,
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
    let title;
    let description;
    let image;
    let postURL;

    if (postSEO) {
      const postMeta = postNode.frontmatter;
      title = postMeta.title;
      description = postMeta.description ? postMeta.description : postNode.excerpt;
      image = postMeta.cover;
      postURL = `${siteUrl}${pathPrefix}${postPath}`;
    } else {
      title = siteTitle;
      description = siteDescription;
      image = siteLogo;
    }

    const realPrefix = pathPrefix === '/' ? '' : pathPrefix;
    image = `${siteUrl}${realPrefix}${image}`;
    const blogURL = `${siteUrl}${pathPrefix}`;
    const schemaOrgJSONLD = [{
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
            image
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
        description
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

}

var _default = SEO;
exports.default = _default;