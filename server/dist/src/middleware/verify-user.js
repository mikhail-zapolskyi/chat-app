"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../errors");
const verify_user = (req, res, next) => {
    var _a, _b;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.chatToken)) {
        return res.json({ user: null });
    }
    try {
        const token = jsonwebtoken_1.default.verify((_b = req.session) === null || _b === void 0 ? void 0 : _b.chatToken, process.env.COOKIE_SECRET);
        req.user = token.user;
    }
    catch (error) {
        return next(new errors_1.AuthError("You are not authenticated"));
    }
    next();
};
exports.default = verify_user;
//# sourceMappingURL=verify-user.js.map