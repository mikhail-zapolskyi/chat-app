"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/hooks */ \"./src/redux/hooks.tsx\");\n/* harmony import */ var _redux_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/authSlice */ \"./src/redux/authSlice.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst HomePage = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const handleLogOut = ()=>{\n        dispatch(_redux_authSlice__WEBPACK_IMPORTED_MODULE_2__.logoutUser);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Chat App. Please proceed to login page\"\n            }, void 0, false, {\n                fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/login\",\n                className: \"\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: handleLogOut,\n                style: {\n                    cursor: \"pointer\"\n                },\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_s(HomePage, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFDQTtBQUVoRCxNQUFNRSxXQUFXLElBQU07O0lBQ3RCLE1BQU1DLFdBQVdILDREQUFjQTtJQUUvQixNQUFNSSxlQUFlLElBQU07UUFDMUJELFNBQVNGLHdEQUFVQTtJQUNwQjtJQUVBLHFCQUNDLDhEQUFDSTs7MEJBQ0EsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFFQyxNQUFLO2dCQUFTQyxXQUFVOzBCQUFHOzs7Ozs7MEJBRzlCLDhEQUFDQztnQkFBRUMsU0FBU1A7Z0JBQWNRLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVU7MEJBQUc7Ozs7Ozs7Ozs7OztBQUszRDtHQWxCTVg7O1FBQ1lGLHdEQUFjQTs7O0tBRDFCRTtBQW9CTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vcmVkdXgvaG9va3NcIjtcbmltcG9ydCB7IGxvZ291dFVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvYXV0aFNsaWNlXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cblx0Y29uc3QgaGFuZGxlTG9nT3V0ID0gKCkgPT4ge1xuXHRcdGRpc3BhdGNoKGxvZ291dFVzZXIpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5XZWxjb21lIHRvIENoYXQgQXBwLiBQbGVhc2UgcHJvY2VlZCB0byBsb2dpbiBwYWdlPC9oMT5cblx0XHRcdDxhIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0TG9naW5cblx0XHRcdDwvYT5cblx0XHRcdDxwIG9uQ2xpY2s9e2hhbmRsZUxvZ091dH0gc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cblx0XHRcdFx0TG9nb3V0XG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsImxvZ291dFVzZXIiLCJIb21lUGFnZSIsImRpc3BhdGNoIiwiaGFuZGxlTG9nT3V0IiwiZGl2IiwiaDEiLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});