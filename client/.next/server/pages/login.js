"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Login = ()=>{\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\"\n    });\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n    // Perform authentication here\n    };\n    const handle_auth_state = (e)=>{\n        e.preventDefault();\n        setAuth({\n            ...auth,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fs\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"auth-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"username\",\n                    placeholder: \"Username\",\n                    value: auth.username,\n                    onChange: handle_auth_state,\n                    className: \"auth-form__input auth-form__username\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    name: \"password\",\n                    placeholder: \"Password\",\n                    value: auth.password,\n                    onChange: handle_auth_state,\n                    className: \"auth-form__input auth-form__password\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"auth-form__btn btn\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Don't have an account.\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/register\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLFFBQVEsSUFBTTtJQUNuQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7UUFBRUksVUFBVTtRQUFJQyxVQUFVO0lBQUc7SUFFOUQsTUFBTUMsZUFBZSxDQUFDQyxRQUEyQjtRQUNoREEsTUFBTUMsY0FBYztJQUNwQiw4QkFBOEI7SUFDL0I7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0MsSUFBTTtRQUNoQ0EsRUFBRUYsY0FBYztRQUVoQkwsUUFBUTtZQUFFLEdBQUdELElBQUk7WUFBRSxDQUFDUSxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNwRDtJQUVBLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFLQyxVQUFVWDtZQUFjUyxXQUFVOzs4QkFDdkMsOERBQUNHO29CQUNBQyxNQUFLO29CQUNMUCxNQUFLO29CQUNMUSxhQUFZO29CQUNaUCxPQUFPWCxLQUFLRSxRQUFRO29CQUNwQmlCLFVBQVVaO29CQUNWTSxXQUFVOzs7Ozs7OEJBRVgsOERBQUNHO29CQUNBQyxNQUFLO29CQUNMUCxNQUFLO29CQUNMUSxhQUFZO29CQUNaUCxPQUFPWCxLQUFLRyxRQUFRO29CQUNwQmdCLFVBQVVaO29CQUNWTSxXQUFVOzs7Ozs7OEJBRVgsOERBQUNPO29CQUFPSCxNQUFLO29CQUFTSixXQUFVOzhCQUFxQjs7Ozs7OzhCQUdyRCw4REFBQ1E7O3dCQUFFO3NDQUVGLDhEQUFDQzs0QkFBRUMsTUFBSztzQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7QUFFQSxpRUFBZXhCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9sb2dpbi50c3g/NzI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG5cdGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBQZXJmb3JtIGF1dGhlbnRpY2F0aW9uIGhlcmVcblx0fTtcblxuXHRjb25zdCBoYW5kbGVfYXV0aF9zdGF0ZSA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0c2V0QXV0aCh7IC4uLmF1dGgsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mc1wiPlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCI+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRuYW1lPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuXHRcdFx0XHRcdHZhbHVlPXthdXRoLnVzZXJuYW1lfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVfYXV0aF9zdGF0ZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhdXRoLWZvcm1fX2lucHV0IGF1dGgtZm9ybV9fdXNlcm5hbWVcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0dmFsdWU9e2F1dGgucGFzc3dvcmR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZV9hdXRoX3N0YXRlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImF1dGgtZm9ybV9faW5wdXQgYXV0aC1mb3JtX19wYXNzd29yZFwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGgtZm9ybV9fYnRuIGJ0blwiPlxuXHRcdFx0XHRcdExvZ2luXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHREb24ndCBoYXZlIGFuIGFjY291bnQuXG5cdFx0XHRcdFx0PGEgaHJlZj1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9hPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJhdXRoIiwic2V0QXV0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlX2F1dGhfc3RhdGUiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();