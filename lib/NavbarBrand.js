"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["className", "children", "tag"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var propTypes = process.env.NODE_ENV !== "production" ? {
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  brand: _propTypes["default"].any,
  full: _propTypes["default"].any,
  minimized: _propTypes["default"].any
} : {};
var defaultProps = {
  tag: 'a'
};
var AppNavbarBrand = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppNavbarBrand, _Component);
  function AppNavbarBrand() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = AppNavbarBrand.prototype;
  _proto.imgSrc = function imgSrc(brand) {
    return brand.src ? brand.src : '';
  };
  _proto.imgWidth = function imgWidth(brand) {
    return brand.width ? brand.width : 'auto';
  };
  _proto.imgHeight = function imgHeight(brand) {
    return brand.height ? brand.height : 'auto';
  };
  _proto.imgAlt = function imgAlt(brand) {
    return brand.alt ? brand.alt : '';
  };
  _proto.navbarBrandImg = function navbarBrandImg(props, classBrand, key) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      src: this.imgSrc(props),
      width: this.imgWidth(props),
      height: this.imgHeight(props),
      alt: this.imgAlt(props),
      className: classBrand,
      key: key.toString()
    });
  };
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var classes = (0, _classnames["default"])(className, 'navbar-brand');
    var img = [];
    if (this.props.brand) {
      var props = this.props.brand;
      var classBrand = 'navbar-brand';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (this.props.full) {
      var _props = this.props.full;
      var _classBrand = 'navbar-brand-full';
      img.push(this.navbarBrandImg(_props, _classBrand, img.length + 1));
    }
    if (this.props.minimized) {
      var _props2 = this.props.minimized;
      var _classBrand2 = 'navbar-brand-minimized';
      img.push(this.navbarBrandImg(_props2, _classBrand2, img.length + 1));
    }
    return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
      className: classes
    }), children || img);
  };
  return AppNavbarBrand;
}(_react.Component);
AppNavbarBrand.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppNavbarBrand.defaultProps = defaultProps;
var _default = AppNavbarBrand;
exports["default"] = _default;
module.exports = exports.default;