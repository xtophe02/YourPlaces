webpackHotUpdate("static/development/pages/userPlaces/[userPlaces].js",{

/***/ "./pages/userPlaces/[userPlaces].js":
/*!******************************************!*\
  !*** ./pages/userPlaces/[userPlaces].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PlaceList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PlaceList */ "./components/PlaceList.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/app/pages/userPlaces/[userPlaces].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var userPlaces = function userPlaces() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  console.log(router.querey);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "My Places",
    subtitle: "list of your current places",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_components_PlaceList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    places: _data__WEBPACK_IMPORTED_MODULE_3__["places"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (userPlaces);

/***/ })

})
//# sourceMappingURL=[userPlaces].js.c72362a017daee0ebf57.hot-update.js.map