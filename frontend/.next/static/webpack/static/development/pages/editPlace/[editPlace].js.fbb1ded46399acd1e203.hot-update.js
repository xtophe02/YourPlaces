webpackHotUpdate("static/development/pages/editPlace/[editPlace].js",{

/***/ "./pages/editPlace/[editPlace].js":
/*!****************************************!*\
  !*** ./pages/editPlace/[editPlace].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Input */ "./components/Input.js");
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validators */ "./utils/validators.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useForm */ "./hooks/useForm.js");


var _this = undefined,
    _jsxFileName = "/app/pages/editPlace/[editPlace].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var editPlace = function editPlace() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var findPlace = _data__WEBPACK_IMPORTED_MODULE_6__["places"].find(function (place) {
    return place.id === router.query.editPlace;
  });

  var _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_7__["useForm"])({
    title: {
      value: findPlace ? findPlace.title : '',
      isValid: true
    },
    description: {
      value: findPlace ? findPlace.description : '',
      isValid: true
    },
    address: {
      value: findPlace ? findPlace.address : '',
      isValid: true
    }
  }, true),
      _useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useForm, 2),
      formState = _useForm2[0],
      inputHandler = _useForm2[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Edit Place",
    subtitle: "form to update an existing place",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, findPlace ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "title",
    name: "Title",
    placeholder: "Name of the place",
    icon: "fa-landmark",
    onInput: inputHandler,
    validators: [Object(_utils_validators__WEBPACK_IMPORTED_MODULE_4__["VALIDATOR_REQUIRE"])()],
    value: formState.inputs.title.value,
    valid: formState.inputs.title.isValid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "description",
    name: "Description",
    type: "textarea",
    placeholder: "About the place",
    onInput: inputHandler,
    validators: [Object(_utils_validators__WEBPACK_IMPORTED_MODULE_4__["VALIDATOR_MINLENGTH"])(5)],
    value: formState.inputs.description.value,
    valid: formState.inputs.description.isValid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "address",
    name: "Address",
    placeholder: "address",
    icon: "fa-map-marked-alt",
    onInput: inputHandler,
    validators: [Object(_utils_validators__WEBPACK_IMPORTED_MODULE_4__["VALIDATOR_REQUIRE"])()],
    value: formState.inputs.address.value,
    valid: formState.inputs.address.isValid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "button is-primary",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Update"))) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "error, could not find the place"));
};

/* harmony default export */ __webpack_exports__["default"] = (editPlace);

/***/ })

})
//# sourceMappingURL=[editPlace].js.fbb1ded46399acd1e203.hot-update.js.map