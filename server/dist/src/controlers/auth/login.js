"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const model_1 = require("../../model");
const errors_1 = require("../../errors");
const service_1 = require("../../service");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield model_1.User.findOne({ email });
    if (!user) {
        return next(new errors_1.BadRequest("User not found"));
    }
    const isPasswordCorrect = yield service_1.Password.verify(password, user.password);
    if (!isPasswordCorrect) {
        return next(new errors_1.AuthError("Please provide correct password"));
    }
    const chatToken = jsonwebtoken_1.default.sign({
        exp: Math.floor(Date.now() / 1000) + 3600,
        user,
    }, process.env.COOKIE_SECRET);
    req.session = { chatToken };
    res.status(200).json({ user, message: "You succesfully logged in" });
});
exports.default = login;
//# sourceMappingURL=login.js.map