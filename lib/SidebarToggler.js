"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _index = require("./Shared/index");
var _toggleClasses = _interopRequireDefault(require("./Shared/toggle-classes"));
var _excluded = ["className", "children", "tag"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  display: _propTypes["default"].any,
  mobile: _propTypes["default"].bool,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  type: _propTypes["default"].string
} : {};
var defaultProps = {
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};
var AppSidebarToggler = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarToggler, _Component);
  function AppSidebarToggler(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.sidebarToggle = _this.sidebarToggle.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = AppSidebarToggler.prototype;
  _proto.sidebarToggle = function sidebarToggle(e) {
    e.preventDefault();
    this.toggle();
  };
  _proto.toggle = function toggle(force) {
    var _ref = [this.props.display, this.props.mobile],
      display = _ref[0],
      mobile = _ref[1];
    var cssClass = _index.sidebarCssClasses[0];
    if (!mobile && display && (0, _index.checkBreakpoint)(display, _index.validBreakpoints)) {
      cssClass = "sidebar-" + display + "-show";
    }
    (0, _toggleClasses["default"])(cssClass, _index.sidebarCssClasses, force);
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.mobile;
    delete attributes.display;
    var classes = (0, _classnames["default"])(className, 'navbar-toggler');
    return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
      type: "button",
      className: classes
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.sidebarToggle(event);
      },
      "data-sidebar-toggler": true
    }), children || /*#__PURE__*/_react["default"].createElement("span", {
      className: "navbar-toggler-icon"
    }));
  };
  return AppSidebarToggler;
}(_react.Component);
AppSidebarToggler.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarToggler.defaultProps = defaultProps;
var _default = AppSidebarToggler;
exports["default"] = _default;
module.exports = exports.default;