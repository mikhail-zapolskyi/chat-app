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
const model_1 = require("../../model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = new model_1.User({ email, password });
    user.save()
        .then((data) => {
        const chatToken = jsonwebtoken_1.default.sign({
            exp: Math.floor(Date.now() / 1000) + 3600,
            user,
        }, process.env.COOKIE_SECRET);
        req.session = { chatToken };
        res.status(201).json({
            user: data,
            message: "You succefully registred",
        });
    })
        .catch((err) => {
        return next(err);
    });
});
exports.default = register;
//# sourceMappingURL=register.js.map