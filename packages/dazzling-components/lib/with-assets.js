"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var imageFix = function imageFix(loader) {
  return function (f) {
    return _objectSpread({}, f, {
      image: loader(f.image)
    });
  };
};

var _default = function _default(loader) {
  return function (config) {
    return _objectSpread({}, config, {
      logo: loader(config.logo),
      usedIn: config.usedIn.map(imageFix(loader)),
      features: config.features.map(imageFix(loader))
    });
  };
};

exports.default = _default;