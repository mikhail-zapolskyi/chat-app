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
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/hooks */ \"./src/redux/hooks.tsx\");\n/* harmony import */ var _redux_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/authSlice */ \"./src/redux/authSlice.tsx\");\n\n\n\n\nconst Register = ()=>{\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        dispatch((0,_redux_authSlice__WEBPACK_IMPORTED_MODULE_3__.registerUser)(auth));\n    };\n    const handle_auth_state = (e)=>{\n        e.preventDefault();\n        setAuth({\n            ...auth,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fs\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"auth-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"email\",\n                    placeholder: \"Email\",\n                    value: auth.email,\n                    onChange: handle_auth_state,\n                    className: \"auth-form__input auth-form__username\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/register.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    name: \"password\",\n                    placeholder: \"Password\",\n                    value: auth.password,\n                    onChange: handle_auth_state,\n                    className: \"auth-form__input auth-form__password\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/register.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    name: \"confirmPassword\",\n                    placeholder: \"Confirm Password\",\n                    value: auth.confirmPassword,\n                    onChange: handle_auth_state,\n                    className: \"auth-form__input auth-form__password\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/register.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"auth-form__btn btn\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/register.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Already have an account?\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/login\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/register.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/register.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/register.tsx\",\n            lineNumber: 26,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mikhailzapolskyi/study-projects/112.chat-app/client/src/pages/register.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1E7QUFDRTtBQUVsRCxNQUFNSSxXQUFXLElBQU07SUFDdEIsTUFBTUMsV0FBV0gsNERBQWNBO0lBQy9CLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUNoQ08sT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGlCQUFpQjtJQUNsQjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0MsUUFBMkI7UUFDaERBLE1BQU1DLGNBQWM7UUFDcEJSLFNBQVNGLDhEQUFZQSxDQUFDRztJQUN2QjtJQUVBLE1BQU1RLG9CQUFvQixDQUFDQyxJQUFNO1FBQ2hDQSxFQUFFRixjQUFjO1FBRWhCTixRQUFRO1lBQUUsR0FBR0QsSUFBSTtZQUFFLENBQUNTLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLEVBQUVDLE1BQU0sQ0FBQ0UsS0FBSztRQUFDO0lBQ3BEO0lBRUEscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUtDLFVBQVVYO1lBQWNTLFdBQVU7OzhCQUN2Qyw4REFBQ0c7b0JBQ0FDLE1BQUs7b0JBQ0xQLE1BQUs7b0JBQ0xRLGFBQVk7b0JBQ1pQLE9BQU9aLEtBQUtFLEtBQUs7b0JBQ2pCa0IsVUFBVVo7b0JBQ1ZNLFdBQVU7Ozs7Ozs4QkFFWCw4REFBQ0c7b0JBQ0FDLE1BQUs7b0JBQ0xQLE1BQUs7b0JBQ0xRLGFBQVk7b0JBQ1pQLE9BQU9aLEtBQUtHLFFBQVE7b0JBQ3BCaUIsVUFBVVo7b0JBQ1ZNLFdBQVU7Ozs7Ozs4QkFFWCw4REFBQ0c7b0JBQ0FDLE1BQUs7b0JBQ0xQLE1BQUs7b0JBQ0xRLGFBQVk7b0JBQ1pQLE9BQU9aLEtBQUtJLGVBQWU7b0JBQzNCZ0IsVUFBVVo7b0JBQ1ZNLFdBQVU7Ozs7Ozs4QkFFWCw4REFBQ087b0JBQU9ILE1BQUs7b0JBQVNKLFdBQVU7OEJBQXFCOzs7Ozs7OEJBR3JELDhEQUFDUTs7d0JBQUU7c0NBRUYsOERBQUNDOzRCQUFFQyxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtBQUVBLGlFQUFlMUIsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9yZWdpc3Rlci50c3g/NzA1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIi4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvYXV0aFNsaWNlXCI7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cdGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHtcblx0XHRlbWFpbDogXCJcIixcblx0XHRwYXNzd29yZDogXCJcIixcblx0XHRjb25maXJtUGFzc3dvcmQ6IFwiXCIsXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRkaXNwYXRjaChyZWdpc3RlclVzZXIoYXV0aCkpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZV9hdXRoX3N0YXRlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRzZXRBdXRoKHsgLi4uYXV0aCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZzXCI+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0dmFsdWU9e2F1dGguZW1haWx9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZV9hdXRoX3N0YXRlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImF1dGgtZm9ybV9faW5wdXQgYXV0aC1mb3JtX191c2VybmFtZVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHR2YWx1ZT17YXV0aC5wYXNzd29yZH1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlX2F1dGhfc3RhdGV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXV0aC1mb3JtX19pbnB1dCBhdXRoLWZvcm1fX3Bhc3N3b3JkXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuXHRcdFx0XHRcdHZhbHVlPXthdXRoLmNvbmZpcm1QYXNzd29yZH1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlX2F1dGhfc3RhdGV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXV0aC1mb3JtX19pbnB1dCBhdXRoLWZvcm1fX3Bhc3N3b3JkXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aC1mb3JtX19idG4gYnRuXCI+XG5cdFx0XHRcdFx0UmVnaXN0ZXJcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1xuXHRcdFx0XHRcdDxhIGhyZWY9XCIvbG9naW5cIj5Mb2dpbjwvYT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwicmVnaXN0ZXJVc2VyIiwiUmVnaXN0ZXIiLCJkaXNwYXRjaCIsImF1dGgiLCJzZXRBdXRoIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVfYXV0aF9zdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ }),

/***/ "./src/redux/authSlice.tsx":
/*!*********************************!*\
  !*** ./src/redux/authSlice.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authSlice\": () => (/* binding */ authSlice),\n/* harmony export */   \"fetchUser\": () => (/* binding */ fetchUser),\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser),\n/* harmony export */   \"logoutUser\": () => (/* binding */ logoutUser),\n/* harmony export */   \"registerUser\": () => (/* binding */ registerUser)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fetchUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/fetchUser\", async ()=>{\n    const response = await fetch(`http://localhost:4000/api/user`, {\n        method: \"GET\",\n        credentials: \"include\"\n    });\n    return await response.json();\n});\nconst loginUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/loginUser\", async (data)=>{\n    const response = await fetch(`http://localhost:4000/api/login`, {\n        method: \"POST\",\n        credentials: \"include\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    return await response.json();\n});\nconst registerUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/registerUser\", async (data)=>{\n    const response = await fetch(`http://localhost:4000/api/register`, {\n        method: \"POST\",\n        credentials: \"include\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    return await response.json();\n});\nconst logoutUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/logoutUser\", async ()=>{\n    const response = await fetch(`http://localhost:4000/api/logout`, {\n        method: \"POST\",\n        credentials: \"include\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n});\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState: {\n        user: null\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        // CHECK IF USER STILL LOGEDIN\n        builder.addCase(fetchUser.pending, (state, action)=>{});\n        builder.addCase(fetchUser.fulfilled, (state, { payload  })=>{\n            state.user = payload.user;\n        });\n        builder.addCase(fetchUser.rejected, (state, action)=>{});\n        // LOGIN USER\n        builder.addCase(loginUser.pending, (state, action)=>{});\n        builder.addCase(loginUser.fulfilled, (state, { payload  })=>{\n            state.user = payload.user;\n        });\n        builder.addCase(loginUser.rejected, (state, action)=>{});\n        // REGISTER USER\n        builder.addCase(registerUser.pending, (state, action)=>{});\n        builder.addCase(registerUser.fulfilled, (state, { payload  })=>{\n            state.user = payload.user;\n        });\n        builder.addCase(registerUser.rejected, (state, action)=>{});\n        // LOGOUT USER\n        builder.addCase(logoutUser.pending, (state, action)=>{});\n        builder.addCase(logoutUser.fulfilled, (state, { payload  })=>{\n            state.user = payload.user;\n        });\n        builder.addCase(logoutUser.rejected, (state, action)=>{});\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFXLENBQUM7UUFDeERKLFFBQVFDLE9BQU8sQ0FBQ1IsV0FBV1ksU0FBUyxFQUFFLENBQUNGLE9BQU8sRUFBRUcsUUFBTyxFQUFFLEdBQUs7WUFDN0RILE1BQU1OLElBQUksR0FBR1MsUUFBUVQsSUFBSTtRQUMxQjtRQUNBRyxRQUFRQyxPQUFPLENBQUNSLFdBQVdjLFFBQVEsRUFBRSxDQUFDSixPQUFPQyxTQUFXLENBQUM7SUFDMUQ7QUFDRCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3JlZHV4L2F1dGhTbGljZS50c3g/ODJhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmludGVyZmFjZSBJQXV0aCB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdHBhc3N3b3JkOiBzdHJpbmc7XG5cdGNvbmZpcm1QYXNzd29yZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlciA9IGNyZWF0ZUFzeW5jVGh1bmsoXCJhdXRoL2ZldGNoVXNlclwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdXNlcmAsIHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0Y3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuXHR9KTtcblx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gY3JlYXRlQXN5bmNUaHVuayhcblx0XCJhdXRoL2xvZ2luVXNlclwiLFxuXHRhc3luYyAoZGF0YTogSUF1dGgpID0+IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2xvZ2luYCwge1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fVxuKTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdFwiYXV0aC9yZWdpc3RlclVzZXJcIixcblx0YXN5bmMgKGRhdGE6IElBdXRoKSA9PiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9yZWdpc3RlcmAsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gY3JlYXRlQXN5bmNUaHVuayhcImF1dGgvbG9nb3V0VXNlclwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvbG9nb3V0YCwge1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0Y3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogXCJhdXRoXCIsXG5cdGluaXRpYWxTdGF0ZTogeyB1c2VyOiBudWxsIH0sXG5cdHJlZHVjZXJzOiB7fSxcblx0ZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcblx0XHQvLyBDSEVDSyBJRiBVU0VSIFNUSUxMIExPR0VESU5cblx0XHRidWlsZGVyLmFkZENhc2UoZmV0Y2hVc2VyLnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGZldGNoVXNlci5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLnVzZXIgPSBwYXlsb2FkLnVzZXI7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGZldGNoVXNlci5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHt9KTtcblx0XHQvLyBMT0dJTiBVU0VSXG5cdFx0YnVpbGRlci5hZGRDYXNlKGxvZ2luVXNlci5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge30pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShsb2dpblVzZXIuZnVsZmlsbGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS51c2VyID0gcGF5bG9hZC51c2VyO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShsb2dpblVzZXIucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7fSk7XG5cdFx0Ly8gUkVHSVNURVIgVVNFUlxuXHRcdGJ1aWxkZXIuYWRkQ2FzZShyZWdpc3RlclVzZXIucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHt9KTtcblx0XHRidWlsZGVyLmFkZENhc2UocmVnaXN0ZXJVc2VyLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUudXNlciA9IHBheWxvYWQudXNlcjtcblx0XHR9KTtcblx0XHRidWlsZGVyLmFkZENhc2UocmVnaXN0ZXJVc2VyLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge30pO1xuXHRcdC8vIExPR09VVCBVU0VSXG5cdFx0YnVpbGRlci5hZGRDYXNlKGxvZ291dFVzZXIucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHt9KTtcblx0XHRidWlsZGVyLmFkZENhc2UobG9nb3V0VXNlci5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLnVzZXIgPSBwYXlsb2FkLnVzZXI7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGxvZ291dFVzZXIucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7fSk7XG5cdH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJmZXRjaFVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibG9naW5Vc2VyIiwiZGF0YSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZ2lzdGVyVXNlciIsImxvZ291dFVzZXIiLCJhdXRoU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiYWN0aW9uIiwiZnVsZmlsbGVkIiwicGF5bG9hZCIsInJlamVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/authSlice.tsx\n");

/***/ }),

/***/ "./src/redux/hooks.tsx":
/*!*****************************!*\
  !*** ./src/redux/hooks.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvaG9va3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUQ7QUFJdkQsMkVBQTJFO0FBQ3BFLE1BQU1FLGlCQUFvQ0Ysb0RBQVdBLENBQUM7QUFDdEQsTUFBTUcsaUJBQWtERixvREFBV0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9yZWR1eC9ob29rcy50c3g/MjUxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB0eXBlIHsgVHlwZWRVc2VTZWxlY3Rvckhvb2sgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB0eXBlIHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gXCIuL3N0b3JlXCI7XG5cbi8vIFVzZSB0aHJvdWdob3V0IHlvdXIgYXBwIGluc3RlYWQgb2YgcGxhaW4gYHVzZURpc3BhdGNoYCBhbmQgYHVzZVNlbGVjdG9yYFxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoOiAoKSA9PiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoO1xuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XG4iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/hooks.tsx\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/register.tsx"));
module.exports = __webpack_exports__;

})();