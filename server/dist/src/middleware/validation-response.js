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
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const errors_1 = require("../errors");
const validation_result = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = (0, express_validator_1.validationResult)(req);
    const errors = validation.array().map((i) => i.msg);
    if (!validation.isEmpty()) {
        return next(new errors_1.BadRequest(errors[0]));
    }
    next();
});
exports.default = validation_result;
//# sourceMappingURL=validation-response.js.map