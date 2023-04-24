"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = __importDefault(require("./custom-error"));
class AuthError extends custom_error_1.default {
    constructor(message, statusCode = 401) {
        super(message, statusCode);
        this.name = "AuthError";
    }
}
exports.default = AuthError;
//# sourceMappingURL=auth-error.js.map