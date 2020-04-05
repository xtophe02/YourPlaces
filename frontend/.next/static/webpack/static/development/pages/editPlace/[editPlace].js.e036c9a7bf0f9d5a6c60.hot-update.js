webpackHotUpdate("static/development/pages/editPlace/[editPlace].js",{

/***/ "./pages/editPlace/[editPlace].js":
/*!****************************************!*\
  !*** ./pages/editPlace/[editPlace].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Input */ "./components/Input.js");
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validators */ "./utils/validators.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useForm */ "./hooks/useForm.js");
var _this = undefined,
    _jsxFileName = "/app/pages/editPlace/[editPlace].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var editPlace = function editPlace(_ref) {
  var findPlace = _ref.findPlace;
  console.log(findPlace); // const [formState, inputHandler] = useForm(
  //   {
  //     title: {
  //       value: findPlace.title,
  //       isValid: true,
  //     },
  //     description: {
  //       value: findPlace.description,
  //       isValid: true,
  //     },
  //     address: {
  //       value: findPlace.address,
  //       isValid: true,
  //     },
  //   },
  //   true
  // );

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Edit Place",
    subtitle: "form to update an existing place",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, ") : (", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "error, could not find the place"), ")}");
};

editPlace.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return _data__WEBPACK_IMPORTED_MODULE_5__["places"].find(function (place) {
    return place.id === router.query.editPlace;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (editPlace);

/***/ })

})
//# sourceMappingURL=[editPlace].js.e036c9a7bf0f9d5a6c60.hot-update.js.map