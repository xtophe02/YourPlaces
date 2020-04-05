webpackHotUpdate("static/development/pages/editPlace/[editPlace].js",{

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
  imageUrl: 'https://images.unsplash.com/photo-1543969082-0d5eb654c698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  address: '20 W 34th St, New York, NY 10001',
  location: {
    lat: 40.7484405,
    lng: -73.9878584
  },
  creator: 'u2'
}, {
  id: 'p3',
  title: 'Eiffel Tower',
  description: "Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015. ",
  imageUrl: 'https://images.unsplash.com/photo-1549271456-0c1e6f59ab66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
  location: {
    lat: 48.8539241,
    lng: 2.2913515
  },
  creator: 'u2'
}];

/***/ }),

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "/app/pages/editPlace/[editPlace].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var editPlace = function editPlace(_ref) {
  var findPlace = _ref.findPlace;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  console.log(findPlace); // console.log(router)
  // const [formState, inputHandler] = useForm(
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formState.inputs);
  // };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Edit Place",
    subtitle: "form to update an existing place",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  });
}; // export async function getStaticPaths(){
//   return { paths:[{params:editPlace}], fallback: false }
//   }
// export async function getStaticProps({params}) {
//   const findPlace = places.find((place) => place.id === params.editPlace);
//   return {
//     props: findPlace
//   }
// };


editPlace.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  var findPlace = _data__WEBPACK_IMPORTED_MODULE_5__["places"].find(function (place) {
    return place.id === params.editPlace;
  });
  return findPlace;
};

/* harmony default export */ __webpack_exports__["default"] = (editPlace);

/***/ })

})
//# sourceMappingURL=[editPlace].js.f4af10ccca127f21f0ee.hot-update.js.map