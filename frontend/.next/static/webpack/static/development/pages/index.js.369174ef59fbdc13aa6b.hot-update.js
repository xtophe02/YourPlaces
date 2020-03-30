webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UsersList.js":
/*!*********************************!*\
  !*** ./components/UsersList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserItem */ "./components/UserItem.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/app/components/UsersList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UsersList = function UsersList(_ref) {
  var users = _ref.users;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, users.length === 0 ? __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "no users found") : users.map(function (user) {
    return __jsx(_UserItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: user.id,
      name: user.name,
      image: user.image,
      places: user.places,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UsersList);

/***/ })

})
//# sourceMappingURL=index.js.369174ef59fbdc13aa6b.hot-update.js.map