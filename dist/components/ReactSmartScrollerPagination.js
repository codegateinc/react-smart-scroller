"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dot = exports.RightArrow = exports.LeftArrow = exports.Pagination = exports.ChildrenWrapper = exports.Container = exports.ContainerWrapper = exports.ReactSmartScrollerPagination = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../lib/styles");

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    margin: 0 3px;\n    cursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    border: solid ", ";\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 6px;\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n    cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    border: solid ", ";\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 6px;\n    transform: rotate(135deg);\n    -webkit-transform: rotate(135deg);\n    cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 40px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    flex: 0 0 auto;\n    box-sizing: border-box;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: flex;\n    position: relative;\n    transition: all 1s;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ReactSmartScrollerPagination =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ReactSmartScrollerPagination, _React$Component);

  function ReactSmartScrollerPagination(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ReactSmartScrollerPagination);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ReactSmartScrollerPagination).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      paginationIndex: 0,
      numberOfViews: 0,
      scrollValue: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "overflowContainerRef", _react.default.createRef());
    _this.onNext = _this.onNext.bind((0, _assertThisInitialized2.default)(_this));
    _this.onPrevious = _this.onPrevious.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ReactSmartScrollerPagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        numberOfViews: this.numberOfViews
      });
    }
  }, {
    key: "onNext",
    value: function onNext() {
      var overflowRef = this.overflowContainerRef.current;
      var _this$state = this.state,
          paginationIndex = _this$state.paginationIndex,
          scrollValue = _this$state.scrollValue;

      if (overflowRef && paginationIndex < this.childrenCount - 1) {
        var newScrollValue = scrollValue - overflowRef.offsetWidth;
        var index = scrollValue + overflowRef.offsetWidth >= overflowRef.scrollWidth ? paginationIndex : paginationIndex + 1;
        overflowRef.style.transform = "translate(".concat(newScrollValue, "px)");
        this.setState({
          paginationIndex: index,
          scrollValue: newScrollValue
        });
      }
    }
  }, {
    key: "onPrevious",
    value: function onPrevious() {
      var overflowRef = this.overflowContainerRef.current;
      var _this$state2 = this.state,
          paginationIndex = _this$state2.paginationIndex,
          scrollValue = _this$state2.scrollValue;

      if (overflowRef && paginationIndex > 0) {
        var index = paginationIndex - 1;
        var newScrollValue = scrollValue + overflowRef.offsetWidth;
        overflowRef.style.transform = "translate(".concat(newScrollValue, "px)");
        this.setState({
          paginationIndex: index,
          scrollValue: newScrollValue
        });
      }
    }
  }, {
    key: "onDotClick",
    value: function onDotClick(index) {
      var overflowRef = this.overflowContainerRef.current;
      var paginationIndex = this.state.paginationIndex;

      if (overflowRef && index !== paginationIndex) {
        var newScrollValue = -(index * overflowRef.clientWidth);
        overflowRef.style.transform = "translate(".concat(newScrollValue, "px)");
        this.setState({
          paginationIndex: index,
          scrollValue: newScrollValue
        });
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var cols = this.props.numCols;
      var spacing = this.props.spacing;
      var padding = spacing / 2;
      var children = this.props.children;
      return _react.default.Children.map(children, function (child, index) {
        var paddingRight = index !== _react.default.Children.count(children) - 1 ? "paddingRight: ".concat(padding, "px") : undefined;
        var paddingLeft = index !== 0 ? "paddingLeft: ".concat(padding, "px") : undefined;
        var flexBasis = cols ? "calc(100% / ".concat(cols, ")") : 'unset';
        return _react.default.createElement(ChildrenWrapper, {
          style: {
            padding: "0 ".concat(padding, "px"),
            flexBasis: flexBasis,
            paddingRight: paddingRight,
            paddingLeft: paddingLeft
          }
        }, child);
      });
    }
  }, {
    key: "renderDots",
    value: function renderDots() {
      var _this2 = this;

      return Array.from(Array(this.childrenCount)).map(function (_, index) {
        var backgroundColor = _this2.state.paginationIndex === index ? _styles.colors.primary : _styles.colors.gray.mediumGray;
        return _react.default.createElement(Dot, {
          key: index,
          style: {
            backgroundColor: backgroundColor
          },
          onClick: function onClick() {
            return _this2.onDotClick(index);
          }
        });
      });
    }
  }, {
    key: "renderPagination",
    value: function renderPagination() {
      return _react.default.createElement(Pagination, null, _react.default.createElement(LeftArrow, {
        onClick: this.onPrevious
      }), this.renderDots(), _react.default.createElement(RightArrow, {
        onClick: this.onNext
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(ContainerWrapper, null, _react.default.createElement(Container, {
        ref: this.overflowContainerRef
      }, this.renderChildren()), this.renderPagination());
    }
  }, {
    key: "numberOfViews",
    get: function get() {
      var overflowRef = this.overflowContainerRef.current;

      if (overflowRef) {
        return Math.ceil(overflowRef.scrollWidth / overflowRef.clientWidth);
      }

      return 1;
    }
  }, {
    key: "childrenCount",
    get: function get() {
      return _react.default.Children.count(this.props.children);
    }
  }]);
  return ReactSmartScrollerPagination;
}(_react.default.Component);

exports.ReactSmartScrollerPagination = ReactSmartScrollerPagination;

var ContainerWrapper = _styledComponents.default.div(_templateObject());

exports.ContainerWrapper = ContainerWrapper;

var Container = _styledComponents.default.div(_templateObject2());

exports.Container = Container;

var ChildrenWrapper = _styledComponents.default.div(_templateObject3());

exports.ChildrenWrapper = ChildrenWrapper;

var Pagination = _styledComponents.default.div(_templateObject4());

exports.Pagination = Pagination;

var LeftArrow = _styledComponents.default.div(_templateObject5(), _styles.colors.black);

exports.LeftArrow = LeftArrow;

var RightArrow = _styledComponents.default.div(_templateObject6(), _styles.colors.black);

exports.RightArrow = RightArrow;

var Dot = _styledComponents.default.div(_templateObject7());

exports.Dot = Dot;