"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactstrap = require("reactstrap");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));
var _excluded = ["className", "children", "navConfig"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
// import 'react-perfect-scrollbar/dist/css/styles.css';

var propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  navConfig: _propTypes["default"].any,
  navFunc: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  isOpen: _propTypes["default"].bool,
  staticContext: _propTypes["default"].any,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string])
} : {};
var defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }]
  },
  isOpen: false
};
var AppSidebarNav = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarNav, _Component);
  function AppSidebarNav(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.activeRoute = _this.activeRoute.bind(_assertThisInitialized(_this));
    _this.hideMobile = _this.hideMobile.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = AppSidebarNav.prototype;
  _proto.handleClick = function handleClick(e) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  };
  _proto.activeRoute = function activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };
  _proto.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  }

  // nav list
  ;
  _proto.navList = function navList(items) {
    var _this2 = this;
    return items.map(function (item, index) {
      return _this2.navType(item, index);
    });
  }

  // nav type
  ;
  _proto.navType = function navType(item, idx) {
    return item.title ? this.navTitle(item, idx) : item.divider ? this.navDivider(item, idx) : item.label ? this.navLabel(item, idx) : item.children ? this.navDropdown(item, idx) : this.navItem(item, idx);
  }

  // nav list section title
  ;
  _proto.navTitle = function navTitle(title, key) {
    var classes = (0, _classnames["default"])('nav-title', title["class"]);
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: key,
      className: classes
    }, this.navWrapper(title), " ");
  }

  // simple wrapper for nav-title item
  ;
  _proto.navWrapper = function navWrapper(item) {
    return item.wrapper && item.wrapper.element ? _react["default"].createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  }

  // nav list divider
  ;
  _proto.navDivider = function navDivider(divider, key) {
    var classes = (0, _classnames["default"])('divider', divider["class"]);
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: key,
      className: classes
    });
  }

  // nav label with nav link
  ;
  _proto.navLabel = function navLabel(item, key) {
    var classes = {
      item: (0, _classnames["default"])('hidden-cn', item["class"]),
      link: (0, _classnames["default"])('nav-label', item["class"] ? item["class"] : ''),
      icon: (0, _classnames["default"])('nav-icon', !item.icon ? 'fa fa-circle' : item.icon, item.label.variant ? "text-" + item.label.variant : '', item.label["class"] ? item.label["class"] : '')
    };
    return this.navLink(item, key, classes);
  }

  // nav dropdown
  ;
  _proto.navDropdown = function navDropdown(item, key) {
    var classIcon = (0, _classnames["default"])('nav-icon', item.icon);
    var attributes = JSON.parse(JSON.stringify(item.attributes || {}));
    var classes = (0, _classnames["default"])('nav-link', 'nav-dropdown-toggle', item["class"], attributes["class"]);
    delete attributes["class"];
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: key,
      className: this.activeRoute(item.url, this.props)
    }, /*#__PURE__*/_react["default"].createElement("a", _extends({
      className: classes,
      href: "#",
      onClick: this.handleClick
    }, attributes), /*#__PURE__*/_react["default"].createElement("i", {
      className: classIcon
    }), item.name, this.navBadge(item.badge)), /*#__PURE__*/_react["default"].createElement("ul", {
      className: "nav-dropdown-items"
    }, this.navList(item.children)));
  }

  // nav item with nav link
  ;
  _proto.navItem = function navItem(item, key) {
    var classes = {
      item: (0, _classnames["default"])(item["class"]),
      link: (0, _classnames["default"])('nav-link', item.variant ? "nav-link-" + item.variant : ''),
      icon: (0, _classnames["default"])('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  }

  // nav link
  ;
  _proto.navLink = function navLink(item, key, classes) {
    var url = item.url || '';
    var itemIcon = /*#__PURE__*/_react["default"].createElement("i", {
      className: classes.icon
    });
    var itemBadge = this.navBadge(item.badge);
    var attributes = item.attributes || {};
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.NavItem, {
      key: key,
      className: classes.item
    }, attributes.disabled ? /*#__PURE__*/_react["default"].createElement(_reactstrap.NavLink, _extends({
      href: '',
      className: classes.link
    }, attributes), itemIcon, item.name, itemBadge) : this.isExternal(url) ? /*#__PURE__*/_react["default"].createElement(_reactstrap.NavLink, _extends({
      href: url,
      className: classes.link,
      active: true
    }, attributes), itemIcon, item.name, itemBadge) : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, _extends({
      to: url,
      className: classes.link,
      activeClassName: "active",
      onClick: this.hideMobile
    }, attributes), itemIcon, item.name, itemBadge));
  }

  // badge addon to NavItem
  ;
  _proto.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = (0, _classnames["default"])(badge["class"]);
      return /*#__PURE__*/_react["default"].createElement(_reactstrap.Badge, {
        className: classes,
        color: badge.variant
      }, badge.text);
    }
    return null;
  };
  _proto.isExternal = function isExternal(url) {
    var link = url ? url.substring(0, 4) : '';
    return link === 'http';
  };
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      navConfig = _this$props.navConfig,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;
    var navClasses = (0, _classnames["default"])(className, 'sidebar-nav');

    // ToDo: find better rtl fix
    var isRtl = getComputedStyle(document.documentElement).direction === 'rtl';

    // sidebar-nav root
    return /*#__PURE__*/_react["default"].createElement(_reactPerfectScrollbar["default"], _extends({
      className: navClasses
    }, attributes, {
      options: {
        suppressScrollX: !isRtl
      }
    }), /*#__PURE__*/_react["default"].createElement(_reactstrap.Nav, null, children || this.navList(navConfig.items)));
  };
  return AppSidebarNav;
}(_react.Component);
AppSidebarNav.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarNav.defaultProps = defaultProps;
var _default = AppSidebarNav;
exports["default"] = _default;
module.exports = exports.default;