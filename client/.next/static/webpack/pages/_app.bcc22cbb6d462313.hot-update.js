"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/redux/authSlice.tsx":
/*!*********************************!*\
  !*** ./src/redux/authSlice.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authSlice\": function() { return /* binding */ authSlice; },\n/* harmony export */   \"fetchUser\": function() { return /* binding */ fetchUser; },\n/* harmony export */   \"loginUser\": function() { return /* binding */ loginUser; },\n/* harmony export */   \"logoutUser\": function() { return /* binding */ logoutUser; },\n/* harmony export */   \"registerUser\": function() { return /* binding */ registerUser; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst fetchUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/fetchUser\", async ()=>{\n    const response = await fetch(\"http://localhost:4000/api/user\", {\n        method: \"GET\",\n        credentials: \"include\"\n    });\n    return await response.json();\n});\nconst loginUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/loginUser\", async (data)=>{\n    const response = await fetch(\"http://localhost:4000/api/login\", {\n        method: \"POST\",\n        credentials: \"include\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    return await response.json();\n});\nconst registerUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/registerUser\", async (data)=>{\n    const response = await fetch(\"http://localhost:4000/api/register\", {\n        method: \"POST\",\n        credentials: \"include\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    return await response.json();\n});\nconst logoutUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/logoutUser\", async ()=>{\n    const response = await fetch(\"http://localhost:4000/api/logout\", {\n        method: \"POST\",\n        credentials: \"include\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n});\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState: {\n        user: null\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        // CHECK IF USER STILL LOGEDIN\n        builder.addCase(fetchUser.pending, (state, action)=>{});\n        builder.addCase(fetchUser.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.user = payload.user;\n        });\n        builder.addCase(fetchUser.rejected, (state, action)=>{});\n        // LOGIN USER\n        builder.addCase(loginUser.pending, (state, action)=>{});\n        builder.addCase(loginUser.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.user = payload.user;\n        });\n        builder.addCase(loginUser.rejected, (state, action)=>{});\n        // REGISTER USER\n        builder.addCase(registerUser.pending, (state, action)=>{});\n        builder.addCase(registerUser.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.user = payload.user;\n        });\n        builder.addCase(registerUser.rejected, (state, action)=>{});\n        // LOGOUT USER\n        builder.addCase(logoutUser.pending, (state, action)=>{});\n        builder.addCase(logoutUser.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.user = payload.user;\n        });\n        builder.addCase(logoutUser.rejected, (state, action)=>{});\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0YsZUFBdUI7Z0JBQWhCLEVBQUVHLFFBQU8sRUFBRTtZQUN4REgsTUFBTU4sSUFBSSxHQUFHUyxRQUFRVCxJQUFJO1FBQzFCO1FBQ0FHLFFBQVFDLE9BQU8sQ0FBQ1IsV0FBV2MsUUFBUSxFQUFFLENBQUNKLE9BQU9DLFNBQVcsQ0FBQztJQUMxRDtBQUNELEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2F1dGhTbGljZS50c3g/ODJhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmludGVyZmFjZSBJQXV0aCB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdHBhc3N3b3JkOiBzdHJpbmc7XG5cdGNvbmZpcm1QYXNzd29yZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlciA9IGNyZWF0ZUFzeW5jVGh1bmsoXCJhdXRoL2ZldGNoVXNlclwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdXNlcmAsIHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0Y3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuXHR9KTtcblx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gY3JlYXRlQXN5bmNUaHVuayhcblx0XCJhdXRoL2xvZ2luVXNlclwiLFxuXHRhc3luYyAoZGF0YTogSUF1dGgpID0+IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2xvZ2luYCwge1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fVxuKTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdFwiYXV0aC9yZWdpc3RlclVzZXJcIixcblx0YXN5bmMgKGRhdGE6IElBdXRoKSA9PiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9yZWdpc3RlcmAsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gY3JlYXRlQXN5bmNUaHVuayhcImF1dGgvbG9nb3V0VXNlclwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvbG9nb3V0YCwge1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0Y3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogXCJhdXRoXCIsXG5cdGluaXRpYWxTdGF0ZTogeyB1c2VyOiBudWxsIH0sXG5cdHJlZHVjZXJzOiB7fSxcblx0ZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcblx0XHQvLyBDSEVDSyBJRiBVU0VSIFNUSUxMIExPR0VESU5cblx0XHRidWlsZGVyLmFkZENhc2UoZmV0Y2hVc2VyLnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGZldGNoVXNlci5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLnVzZXIgPSBwYXlsb2FkLnVzZXI7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGZldGNoVXNlci5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHt9KTtcblx0XHQvLyBMT0dJTiBVU0VSXG5cdFx0YnVpbGRlci5hZGRDYXNlKGxvZ2luVXNlci5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge30pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShsb2dpblVzZXIuZnVsZmlsbGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS51c2VyID0gcGF5bG9hZC51c2VyO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShsb2dpblVzZXIucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7fSk7XG5cdFx0Ly8gUkVHSVNURVIgVVNFUlxuXHRcdGJ1aWxkZXIuYWRkQ2FzZShyZWdpc3RlclVzZXIucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHt9KTtcblx0XHRidWlsZGVyLmFkZENhc2UocmVnaXN0ZXJVc2VyLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUudXNlciA9IHBheWxvYWQudXNlcjtcblx0XHR9KTtcblx0XHRidWlsZGVyLmFkZENhc2UocmVnaXN0ZXJVc2VyLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge30pO1xuXHRcdC8vIExPR09VVCBVU0VSXG5cdFx0YnVpbGRlci5hZGRDYXNlKGxvZ291dFVzZXIucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHt9KTtcblx0XHRidWlsZGVyLmFkZENhc2UobG9nb3V0VXNlci5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLnVzZXIgPSBwYXlsb2FkLnVzZXI7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGxvZ291dFVzZXIucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7fSk7XG5cdH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJmZXRjaFVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibG9naW5Vc2VyIiwiZGF0YSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZ2lzdGVyVXNlciIsImxvZ291dFVzZXIiLCJhdXRoU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiYWN0aW9uIiwiZnVsZmlsbGVkIiwicGF5bG9hZCIsInJlamVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/authSlice.tsx\n"));

/***/ })

});