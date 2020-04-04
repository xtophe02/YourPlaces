webpackHotUpdate("static/development/pages/addPlace.js",{

/***/ "./pages/addPlace.js":
/*!***************************!*\
  !*** ./pages/addPlace.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input */ "./components/Input.js");
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/validators */ "./utils/validators.js");
var _jsxFileName = "/app/pages/addPlace.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function addPlace() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Add Place",
    subtitle: "form to add a new place",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Title",
    placeholder: "Name of the place",
    icon: "fa-landmark",
    validators: [Object(_utils_validators__WEBPACK_IMPORTED_MODULE_3__["VALIDATOR_REQUIRE"])()],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Description",
    type: "textarea",
    placeholder: "About the place",
    validators: [Object(_utils_validators__WEBPACK_IMPORTED_MODULE_3__["VALIDATOR_REQUIRE"])()],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Address",
    placeholder: "address",
    icon: "fa-map-marked-alt",
    validators: [Object(_utils_validators__WEBPACK_IMPORTED_MODULE_3__["VALIDATOR_REQUIRE"])()],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (addPlace);

/***/ })

})
//# sourceMappingURL=addPlace.js.9cd0b02db07fd736c090.hot-update.js.map