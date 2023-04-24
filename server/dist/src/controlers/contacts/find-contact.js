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
const model_1 = require("../../model");
const errors_1 = require("../../errors");
const findContactByEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const contact = yield model_1.User.findOne({ email }, { email: 1, id: 1 });
    if (!contact) {
        return next(new errors_1.BadRequest("Contact not found"));
    }
    res.status(200).json({
        contact: { email: contact.email, id: contact.id },
    });
});
exports.default = findContactByEmail;
//# sourceMappingURL=find-contact.js.map