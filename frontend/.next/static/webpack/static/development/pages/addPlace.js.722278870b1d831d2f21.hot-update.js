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

      default:
        return state;
    }
  };

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useReducer(inputReducer, {
    value: "",
    isValid: false
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

  return __jsx("div", {
    className: "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("label", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, name), __jsx("div", {
    className: "control ".concat(icon && "has-icons-left"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, type === "textarea" ? __jsx("textarea", {
    className: "textarea ".concat(!inputState.isValid && 'is-danger'),
    placeholder: placeholder,
    onChange: handleChange,
    value: inputState.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }) : __jsx("input", {
    className: "input ".concat(!inputState.isValid && 'is-danger'),
    type: type,
    placeholder: placeholder,
    onChange: handleChange,
    value: inputState.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), icon && __jsx("span", {
    className: "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas ".concat(icon),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }))), !inputState.isValid && __jsx("p", {
    className: "help is-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "This ", name, " is invalid"));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./utils/validators.js":
/*!*****************************!*\
  !*** ./utils/validators.js ***!
  \*****************************/
/*! exports provided: VALIDATOR_REQUIRE, VALIDATOR_FILE, VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH, VALIDATOR_MIN, VALIDATOR_MAX, VALIDATOR_EMAIL, validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR_REQUIRE", function() { return VALIDATOR_REQUIRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR_FILE", function() { return VALIDATOR_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR_MINLENGTH", function() { return VALIDATOR_MINLENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR_MAXLENGTH", function() { return VALIDATOR_MAXLENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR_MIN", function() { return VALIDATOR_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR_MAX", function() { return VALIDATOR_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR_EMAIL", function() { return VALIDATOR_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
var VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
var VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
var VALIDATOR_TYPE_MIN = 'MIN';
var VALIDATOR_TYPE_MAX = 'MAX';
var VALIDATOR_TYPE_EMAIL = 'EMAIL';
var VALIDATOR_TYPE_FILE = 'FILE';
var VALIDATOR_REQUIRE = function VALIDATOR_REQUIRE() {
  return {
    type: VALIDATOR_TYPE_REQUIRE
  };
};
var VALIDATOR_FILE = function VALIDATOR_FILE() {
  return {
    type: VALIDATOR_TYPE_FILE
  };
};
var VALIDATOR_MINLENGTH = function VALIDATOR_MINLENGTH(val) {
  return {
    type: VALIDATOR_TYPE_MINLENGTH,
    val: val
  };
};
var VALIDATOR_MAXLENGTH = function VALIDATOR_MAXLENGTH(val) {
  return {
    type: VALIDATOR_TYPE_MAXLENGTH,
    val: val
  };
};
var VALIDATOR_MIN = function VALIDATOR_MIN(val) {
  return {
    type: VALIDATOR_TYPE_MIN,
    val: val
  };
};
var VALIDATOR_MAX = function VALIDATOR_MAX(val) {
  return {
    type: VALIDATOR_TYPE_MAX,
    val: val
  };
};
var VALIDATOR_EMAIL = function VALIDATOR_EMAIL() {
  return {
    type: VALIDATOR_TYPE_EMAIL
  };
};
var validate = function validate(value, validators) {
  var isValid = true;

  var _iterator = _createForOfIteratorHelper(validators),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var validator = _step.value;

      if (validator.type === VALIDATOR_TYPE_REQUIRE) {
        isValid = isValid && value.trim().length > 0;
      }

      if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
        isValid = isValid && value.trim().length >= validator.val;
      }

      if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
        isValid = isValid && value.trim().length <= validator.val;
      }

      if (validator.type === VALIDATOR_TYPE_MIN) {
        isValid = isValid && +value >= validator.val;
      }

      if (validator.type === VALIDATOR_TYPE_MAX) {
        isValid = isValid && +value <= validator.val;
      }

      if (validator.type === VALIDATOR_TYPE_EMAIL) {
        isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return isValid;
};

/***/ }),

/***/ "./utils/validotors.js":
false

})
//# sourceMappingURL=addPlace.js.722278870b1d831d2f21.hot-update.js.map