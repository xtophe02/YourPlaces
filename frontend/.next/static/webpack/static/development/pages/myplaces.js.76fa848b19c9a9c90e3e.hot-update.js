webpackHotUpdate("static/development/pages/myplaces.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/app/components/NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var NavBar = function NavBar(_ref) {
  var title = _ref.title;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      activeItem = _React$useState2[0],
      setActiveItem = _React$useState2[1];

  return (
    /*    <nav
         className="navbar is-fixed-top is-dark"
         role="navigation"
         aria-label="main navigation"
       >
         <div className="navbar-brand">
           <Link href='/'>
          
           <a className="navbar-item" href="https://bulma.io">
             <span className="title is-4 has-text-white">YourPlaces</span>
             
           </a>
           </Link>
           <a
             role="button"
             className={`navbar-burger burger ${activeItem ? 'is-active ' : null}`}
             aria-label="menu"
             aria-expanded="false"
             data-target="navbarBasicExample"
             onClick={()=>setActiveItem(!activeItem)}
           >
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
           </a>
         </div>
          <div id="navbarBasicExample" className={`navbar-menu ${activeItem ? 'is-active' : null}`}>
           <div className="navbar-start">
            
           </div>
            <div className="navbar-end">
             <Link href='/' >
             <a className={`navbar-item ${title === 'Users' ? 'is-active' : null}`}>All Users</a>
             </Link>
           
             
           <Link href='/myplaces' >
           <a className={`navbar-item ${title === 'My Places' ? 'is-active' : null}`}>My Places</a>
           </Link>
           <Link href='/addplace'>
           <a className="navbar-item">Add Place</a>
           </Link>
           
             <div className="navbar-item">
               <div className="buttons">
                 <a className="button is-primary">
                   <strong>Authenticate</strong>
                 </a>
        
               </div>
             </div>
           </div>
         </div>
       </nav> */
    __jsx("nav", {
      "class": "navbar",
      role: "navigation",
      "aria-label": "main navigation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }
    }, __jsx("div", {
      "class": "navbar-brand",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 3
      }
    }, __jsx("a", {
      "class": "navbar-item",
      href: "https://bulma.io",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }
    }, __jsx("img", {
      src: "https://bulma.io/images/bulma-logo.png",
      width: "112",
      height: "28",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }
    })), __jsx("a", {
      role: "button",
      "class": "navbar-burger burger",
      "aria-label": "menu",
      "aria-expanded": "false",
      "data-target": "navbarBasicExample",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }), __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }), __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }))), __jsx("div", {
      id: "navbarBasicExample",
      "class": "navbar-menu is-active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 3
      }
    }, __jsx("div", {
      "class": "navbar-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }
    }, __jsx("a", {
      "class": "navbar-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, "Home"), __jsx("a", {
      "class": "navbar-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }
    }, "Documentation"), __jsx("div", {
      "class": "navbar-item has-dropdown is-hoverable",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }, __jsx("a", {
      "class": "navbar-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, "More"), __jsx("div", {
      "class": "navbar-dropdown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, __jsx("a", {
      "class": "navbar-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, "About"), __jsx("a", {
      "class": "navbar-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }, "Jobs"), __jsx("a", {
      "class": "navbar-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }, "Contact"), __jsx("hr", {
      "class": "navbar-divider",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }), __jsx("a", {
      "class": "navbar-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }, "Report an issue")))), __jsx("div", {
      "class": "navbar-end",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 5
      }
    }, __jsx("div", {
      "class": "navbar-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }
    }, __jsx("div", {
      "class": "buttons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }, __jsx("a", {
      "class": "button is-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, "Sign up")), __jsx("a", {
      "class": "button is-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }
    }, "Log in"))))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=myplaces.js.76fa848b19c9a9c90e3e.hot-update.js.map