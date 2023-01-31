"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/hooks */ \"./src/redux/hooks.tsx\");\n/* harmony import */ var _redux_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/authSlice */ \"./src/redux/authSlice.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"./src/components/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        // Perform authentication here\n        dispatch((0,_redux_authSlice__WEBPACK_IMPORTED_MODULE_3__.loginUser)(auth));\n    };\n    const handle_auth_state = (e)=>{\n        e.preventDefault();\n        setAuth({\n            ...auth,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"auth-form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"email\",\n                            placeholder: \"Email\",\n                            value: auth.email,\n                            onChange: handle_auth_state,\n                            className: \"auth-form__input auth-form__username\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/login.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            name: \"password\",\n                            placeholder: \"Password\",\n                            value: auth.password,\n                            onChange: handle_auth_state,\n                            className: \"auth-form__input auth-form__password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/login.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"auth-form__btn btn\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/login.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Don't have an account.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/register\",\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/login.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/login.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/login.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/login.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.Message, {\n                message: \"Hello Message\"\n            }, void 0, false, {\n                fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/login.tsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Login, \"02KuZcd+/5Khn9+z+eWerq/qg1Q=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDUTtBQUNEO0FBQ1A7QUFFeEMsTUFBTUssUUFBUSxJQUFNOztJQUNuQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7UUFBRU8sT0FBTztRQUFJQyxVQUFVO0lBQUc7SUFDM0QsTUFBTUMsV0FBV1IsNERBQWNBO0lBRS9CLE1BQU1TLGVBQWUsQ0FBQ0MsUUFBMkI7UUFDaERBLE1BQU1DLGNBQWM7UUFDcEIsOEJBQThCO1FBQzlCSCxTQUFTUCwyREFBU0EsQ0FBQ0c7SUFDcEI7SUFFQSxNQUFNUSxvQkFBb0IsQ0FBQ0MsSUFBTTtRQUNoQ0EsRUFBRUYsY0FBYztRQUVoQk4sUUFBUTtZQUFFLEdBQUdELElBQUk7WUFBRSxDQUFDUyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNwRDtJQUVBLHFCQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNDO29CQUFLQyxVQUFVWDtvQkFBY1MsV0FBVTs7c0NBQ3ZDLDhEQUFDRzs0QkFDQUMsTUFBSzs0QkFDTFAsTUFBSzs0QkFDTFEsYUFBWTs0QkFDWlAsT0FBT1osS0FBS0UsS0FBSzs0QkFDakJrQixVQUFVWjs0QkFDVk0sV0FBVTs7Ozs7O3NDQUVYLDhEQUFDRzs0QkFDQUMsTUFBSzs0QkFDTFAsTUFBSzs0QkFDTFEsYUFBWTs0QkFDWlAsT0FBT1osS0FBS0csUUFBUTs0QkFDcEJpQixVQUFVWjs0QkFDVk0sV0FBVTs7Ozs7O3NDQUVYLDhEQUFDTzs0QkFBT0gsTUFBSzs0QkFBU0osV0FBVTtzQ0FBcUI7Ozs7OztzQ0FHckQsOERBQUNROztnQ0FBRTs4Q0FFRiw4REFBQ0M7b0NBQUVDLE1BQUs7OENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl2Qiw4REFBQzFCLGdEQUFPQTtnQkFBQzJCLFNBQVE7Ozs7Ozs7O0FBR3BCO0dBaERNMUI7O1FBRVlILHdEQUFjQTs7O0tBRjFCRztBQWtETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4udHN4PzExZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IHsgbG9naW5Vc2VyIH0gZnJvbSBcIi4uL3JlZHV4L2F1dGhTbGljZVwiO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuXHRjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBQZXJmb3JtIGF1dGhlbnRpY2F0aW9uIGhlcmVcblx0XHRkaXNwYXRjaChsb2dpblVzZXIoYXV0aCkpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZV9hdXRoX3N0YXRlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRzZXRBdXRoKHsgLi4uYXV0aCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mc1wiPlxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcblx0XHRcdFx0XHRcdHZhbHVlPXthdXRoLmVtYWlsfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZV9hdXRoX3N0YXRlfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXV0aC1mb3JtX19pbnB1dCBhdXRoLWZvcm1fX3VzZXJuYW1lXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdHZhbHVlPXthdXRoLnBhc3N3b3JkfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZV9hdXRoX3N0YXRlfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXV0aC1mb3JtX19pbnB1dCBhdXRoLWZvcm1fX3Bhc3N3b3JkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGgtZm9ybV9fYnRuIGJ0blwiPlxuXHRcdFx0XHRcdFx0TG9naW5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdERvbid0IGhhdmUgYW4gYWNjb3VudC5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvYT5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PE1lc3NhZ2UgbWVzc2FnZT1cIkhlbGxvIE1lc3NhZ2VcIj48L01lc3NhZ2U+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJsb2dpblVzZXIiLCJNZXNzYWdlIiwiTG9naW4iLCJhdXRoIiwic2V0QXV0aCIsImVtYWlsIiwicGFzc3dvcmQiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVfYXV0aF9zdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwicCIsImEiLCJocmVmIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n"));

/***/ })

});