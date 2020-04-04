webpackHotUpdate("static/development/pages/addPlace.js",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/validators */ "./utils/validators.js");



var _this = undefined,
    _jsxFileName = "/app/components/Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Input = function Input(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      name = _ref.name,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      validators = _ref.validators;

  var inputReducer = function inputReducer(state, action) {
    switch (action.type) {
      case "CHANGE":
        return _objectSpread({}, state, {
          value: action.val,
          isValid: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_3__["validate"])(action.val, action.validators)
        });

      case 'TOUCH':
        return _objectSpread({}, state, {
          isTouched: true
        });

      default:
        return state;
    }
  };

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      inputState = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var handleChange = function handleChange(e) {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: validators
    });
  };

  var handleBlur = function handleBlur(e) {
    dispatch({
      type: "TOUCH"
    });
  };

  return __jsx("div", {
    className: "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("label", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, name), __jsx("div", {
    className: "control ".concat(icon && "has-icons-left"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, type === "textarea" ? __jsx("textarea", {
    className: "textarea ".concat(!inputState.isValid && inputState.isTouched && 'is-danger'),
    placeholder: placeholder,
    onChange: handleChange,
    value: inputState.value,
    onBlur: handleBlur,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }) : __jsx("input", {
    className: "input ".concat(!inputState.isValid && inputState.isTouched && 'is-danger'),
    type: type,
    placeholder: placeholder,
    onChange: handleChange,
    value: inputState.value,
    onBlur: handleBlur,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), icon && __jsx("span", {
    className: "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas ".concat(icon),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }))), !inputState.isValid && inputState.isTouched && __jsx("p", {
    className: "help is-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "This ", name, " is invalid"));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=addPlace.js.1ed9e5f2c4423d35e5af.hot-update.js.map