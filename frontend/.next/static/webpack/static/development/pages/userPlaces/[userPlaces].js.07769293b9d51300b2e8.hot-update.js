webpackHotUpdate("static/development/pages/userPlaces/[userPlaces].js",{

/***/ "./components/PlaceList.js":
/*!*********************************!*\
  !*** ./components/PlaceList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlaceItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlaceItem */ "./components/PlaceItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/app/components/PlaceList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PlaceList = function PlaceList(_ref) {
  var places = _ref.places;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log(router.query);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, places.length === 0 ? __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "no places found") : places.map(function (place) {
    return __jsx(_PlaceItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: place.id,
      image: place.imageUrl,
      title: place.title,
      description: place.description,
      address: place.address,
      creatorId: place.creater,
      coordinates: place.location,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlaceList);

/***/ })

})
//# sourceMappingURL=[userPlaces].js.07769293b9d51300b2e8.hot-update.js.map