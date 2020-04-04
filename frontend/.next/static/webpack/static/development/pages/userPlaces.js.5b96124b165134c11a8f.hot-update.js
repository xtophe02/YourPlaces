webpackHotUpdate("static/development/pages/userPlaces.js",{

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.users = [{
  id: "u1",
  name: "Christophe",
  places: 2,
  image: "https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  id: "u2",
  name: "Idalia",
  places: 1,
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  id: "u3",
  name: "Nicole",
  places: 3,
  image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  id: "u4",
  name: "Noah",
  places: 4,
  image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}];
exports.places = [{
  id: 'p1',
  title: 'Empire State Building',
  description: 'One of the most famous sky scrapers in the world!',
  imageUrl: 'https://images.unsplash.com/photo-1550664890-c5e34a6cad31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  address: '20 W 34th St, New York, NY 10001',
  location: {
    lat: 40.7484405,
    lng: -73.9878584
  },
  creator: 'u1'
}, {
  id: 'p2',
  title: 'Empire State Building',
  description: 'One of the most famous sky scrapers in the world!',
  imageUrl: 'https://images.unsplash.com/photo-1550664890-c5e34a6cad31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  address: '20 W 34th St, New York, NY 10001',
  location: {
    lat: 40.7484405,
    lng: -73.9878584
  },
  creator: 'u2'
}];

/***/ }),

/***/ "./pages/userPlaces.js":
/*!*****************************!*\
  !*** ./pages/userPlaces.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PlaceList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PlaceList */ "./components/PlaceList.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/app/pages/userPlaces.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var userPlaces = function userPlaces() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "My Places",
    subtitle: "list of your current places",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_PlaceList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    places: _data__WEBPACK_IMPORTED_MODULE_3__["places"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (userPlaces);

/***/ })

})
//# sourceMappingURL=userPlaces.js.5b96124b165134c11a8f.hot-update.js.map