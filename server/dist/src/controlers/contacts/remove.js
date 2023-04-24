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
const errors_1 = require("../../errors");
const model_1 = require("../../model");
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, contactId } = req.body;
    const contactList = yield model_1.ContactList.findOne({
        users: { $all: [userId, contactId] },
    }, { __v: 0, users: 0 });
    if (!contactList) {
        return next(new errors_1.BadRequest("Contact list not found"));
    }
    // FIND USER AND REMOVE CONTACT FROM USER CONTACT LIST
    yield model_1.User.findByIdAndUpdate({ _id: userId }, { $pull: { contactList: contactList._id } });
    // FIND CONTACT AND REMOVE USER FROM CONTACT CONTACT LIST
    yield model_1.User.findByIdAndUpdate({ _id: contactId }, { $pull: { contactList: contactList._id } });
    // FIND AND REMOVE ALL MESSAGES
    yield model_1.Message.deleteMany({ roomId: contactList.roomId });
    // FIND AND REMOVE ROOM
    yield model_1.Room.findByIdAndDelete({ _id: contactList.roomId });
    // REMOVE CONTACT LIST
    yield model_1.ContactList.findByIdAndDelete({ _id: contactList._id });
    res.status(200).json(contactList);
});
exports.default = remove;
//# sourceMappingURL=remove.js.map