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

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst LoginPage = ()=>{\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\"\n    });\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n    // Perform authentication here\n    };\n    const handle_auth_state = (e)=>{\n        e.preventDefault();\n        setAuth({\n            ...auth,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"login-form\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username\",\n                    value: auth.username,\n                    onChange: handle_auth_state\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password\",\n                    value: auth.password,\n                    onChange: handle_auth_state\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_s(LoginPage, \"5p3ESHhhzteWVoo3SRF7kWOFrBk=\");\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxNQUFNRSxZQUFZLElBQU07O0lBQ3ZCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztRQUFFSSxVQUFVO1FBQUlDLFVBQVU7SUFBRztJQUU5RCxNQUFNQyxlQUFlLENBQUNDLFFBQTJCO1FBQ2hEQSxNQUFNQyxjQUFjO0lBQ3BCLDhCQUE4QjtJQUMvQjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDQyxJQUFNO1FBQ2hDQSxFQUFFRixjQUFjO1FBRWhCTCxRQUFRO1lBQUUsR0FBR0QsSUFBSTtZQUFFLENBQUNRLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLEVBQUVDLE1BQU0sQ0FBQ0UsS0FBSztRQUFDO0lBQ3BEO0lBRUEscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUtDLFVBQVVYOzs4QkFDZiw4REFBQ1k7b0JBQ0FDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pQLE9BQU9YLEtBQUtFLFFBQVE7b0JBQ3BCaUIsVUFBVVo7Ozs7Ozs4QkFFWCw4REFBQ1M7b0JBQ0FDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pQLE9BQU9YLEtBQUtHLFFBQVE7b0JBQ3BCZ0IsVUFBVVo7Ozs7Ozs4QkFFWCw4REFBQ2E7b0JBQU9ILE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFCO0dBakNNbEI7S0FBQUE7QUFtQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IHtcblx0Y29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIFBlcmZvcm0gYXV0aGVudGljYXRpb24gaGVyZVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZV9hdXRoX3N0YXRlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRzZXRBdXRoKHsgLi4uYXV0aCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcblx0XHRcdFx0XHR2YWx1ZT17YXV0aC51c2VybmFtZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlX2F1dGhfc3RhdGV9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0dmFsdWU9e2F1dGgucGFzc3dvcmR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZV9hdXRoX3N0YXRlfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dpblBhZ2UiLCJhdXRoIiwic2V0QXV0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlX2F1dGhfc3RhdGUiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});