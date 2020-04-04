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
var _this = undefined,
    _jsxFileName = "/app/components/PlaceList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PlaceList = function PlaceList(_ref) {
  var places = _ref.places;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, places.length === 0 ? __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
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
        lineNumber: 13,
        columnNumber: 11
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlaceList);

/***/ })

})
//# sourceMappingURL=[userPlaces].js.c1916f367e9ac47e42bd.hot-update.js.map