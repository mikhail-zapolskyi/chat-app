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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LoginPage = ()=>{\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\"\n    });\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n    // Perform authentication here\n    };\n    const handle_auth_state = (e)=>{\n        e.preventDefault();\n        setAuth({\n            ...auth,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fs\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"login-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username\",\n                    value: auth.username,\n                    onChange: handle_auth_state,\n                    className: \"login-form__input login-form__username\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password\",\n                    value: auth.password,\n                    onChange: handle_auth_state,\n                    className: \"login-form__input login-form__password\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"login-form__btn btn\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/pages/login.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLFlBQVksSUFBTTtJQUN2QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7UUFBRUksVUFBVTtRQUFJQyxVQUFVO0lBQUc7SUFFOUQsTUFBTUMsZUFBZSxDQUFDQyxRQUEyQjtRQUNoREEsTUFBTUMsY0FBYztJQUNwQiw4QkFBOEI7SUFDL0I7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0MsSUFBTTtRQUNoQ0EsRUFBRUYsY0FBYztRQUVoQkwsUUFBUTtZQUFFLEdBQUdELElBQUk7WUFBRSxDQUFDUSxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNwRDtJQUVBLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFLQyxVQUFVWDtZQUFjUyxXQUFVOzs4QkFDdkMsOERBQUNHO29CQUNBQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaUCxPQUFPWCxLQUFLRSxRQUFRO29CQUNwQmlCLFVBQVVaO29CQUNWTSxXQUFVOzs7Ozs7OEJBRVgsOERBQUNHO29CQUNBQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaUCxPQUFPWCxLQUFLRyxRQUFRO29CQUNwQmdCLFVBQVVaO29CQUNWTSxXQUFVOzs7Ozs7OEJBRVgsOERBQUNPO29CQUFPSCxNQUFLO29CQUFTSixXQUFVOzhCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUQ7QUFFQSxpRUFBZWQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBQZXJmb3JtIGF1dGhlbnRpY2F0aW9uIGhlcmVcblx0fTtcblxuXHRjb25zdCBoYW5kbGVfYXV0aF9zdGF0ZSA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0c2V0QXV0aCh7IC4uLmF1dGgsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mc1wiPlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG5cdFx0XHRcdFx0dmFsdWU9e2F1dGgudXNlcm5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZV9hdXRoX3N0YXRlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImxvZ2luLWZvcm1fX2lucHV0IGxvZ2luLWZvcm1fX3VzZXJuYW1lXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHR2YWx1ZT17YXV0aC5wYXNzd29yZH1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlX2F1dGhfc3RhdGV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibG9naW4tZm9ybV9faW5wdXQgbG9naW4tZm9ybV9fcGFzc3dvcmRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtX19idG4gYnRuXCI+XG5cdFx0XHRcdFx0TG9naW5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luUGFnZSIsImF1dGgiLCJzZXRBdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVfYXV0aF9zdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

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