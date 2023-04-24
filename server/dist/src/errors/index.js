"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = exports.BadRequest = exports.CustomError = void 0;
var custom_error_1 = require("./custom-error");
Object.defineProperty(exports, "CustomError", { enumerable: true, get: function () { return __importDefault(custom_error_1).default; } });
var bad_request_error_1 = require("./bad-request-error");
Object.defineProperty(exports, "BadRequest", { enumerable: true, get: function () { return __importDefault(bad_request_error_1).default; } });
var auth_error_1 = require("./auth-error");
Object.defineProperty(exports, "AuthError", { enumerable: true, get: function () { return __importDefault(auth_error_1).default; } });
//# sourceMappingURL=index.js.map