"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Shared = require("./Shared");
var _reactOnclickout = _interopRequireDefault(require("react-onclickout"));
require("./Shared/element-closest");
var _layout = _interopRequireDefault(require("./Shared/layout/layout"));
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
  compact: _propTypes["default"].bool,
  display: _propTypes["default"].string,
  fixed: _propTypes["default"].bool,
  minimized: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  offCanvas: _propTypes["default"].bool,
  staticContext: _propTypes["default"].any,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string])
} : {};
var defaultProps = {
  tag: 'div',
  compact: false,
  display: '',
  fixed: false,
  minimized: false,
  isOpen: false,
  offCanvas: false
};
var AppSidebar = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebar, _Component);
  function AppSidebar(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.isCompact = _this.isCompact.bind(_assertThisInitialized(_this));
    _this.isFixed = _this.isFixed.bind(_assertThisInitialized(_this));
    _this.isMinimized = _this.isMinimized.bind(_assertThisInitialized(_this));
    _this.isOffCanvas = _this.isOffCanvas.bind(_assertThisInitialized(_this));
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_assertThisInitialized(_this));
    _this.hideMobile = _this.hideMobile.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = AppSidebar.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.displayBreakpoint(this.props.display);
    this.isCompact(this.props.compact);
    this.isFixed(this.props.fixed);
    this.isMinimized(this.props.minimized);
    this.isOffCanvas(this.props.offCanvas);
  };
  _proto.isCompact = function isCompact(compact) {
    if (compact) {
      document.body.classList.add('sidebar-compact');
    }
  };
  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('sidebar-fixed');
    }
  };
  _proto.isMinimized = function isMinimized(minimized) {
    _layout["default"].sidebarToggle(minimized);
  };
  _proto.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('sidebar-off-canvas');
    }
  };
  _proto.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = "sidebar-" + display + "-show";
    var _sidebarCssClasses$ = _Shared.sidebarCssClasses[0],
      cssClass = _sidebarCssClasses$[0];
    if (display && _Shared.sidebarCssClasses.indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }
    document.body.classList.add(cssClass);
  };
  _proto.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.remove('sidebar-show');
    }
  };
  _proto.onClickOut = function onClickOut(e) {
    if (typeof window !== 'undefined' && document.body.classList.contains('sidebar-show')) {
      if (!e.target.closest('[data-sidebar-toggler]')) {
        this.hideMobile();
      }
    }
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.compact;
    delete attributes.display;
    delete attributes.fixed;
    delete attributes.minimized;
    delete attributes.offCanvas;
    delete attributes.isOpen;
    delete attributes.staticContext;
    var classes = (0, _classnames["default"])(className, 'sidebar');

    // sidebar-nav root
    return /*#__PURE__*/_react["default"].createElement(_reactOnclickout["default"], {
      onClickOut: function onClickOut(e) {
        _this2.onClickOut(e);
      }
    }, /*#__PURE__*/_react["default"].createElement(Tag, _extends({
      className: classes
    }, attributes), children));
  };
  return AppSidebar;
}(_react.Component);
AppSidebar.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebar.defaultProps = defaultProps;
var _default = AppSidebar;
exports["default"] = _default;
module.exports = exports.default;