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
const addContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, contactId } = req.body;
    if (!userId || !contactId) {
        return next(new errors_1.BadRequest("Contact user not found"));
    }
    if (contactId === userId) {
        return next(new errors_1.BadRequest("You can't add yourself"));
    }
    // CHECK IF USER IN CONTACT LIST OR NOT
    const isUserInContact = yield model_1.ContactList.findOne({
        users: { $all: [userId, contactId] },
    });
    if (isUserInContact) {
        return next(new errors_1.BadRequest("Contact already have been added"));
    }
    try {
        // CREATE PRIVATE ROOM FOR BOTH
        const room = new model_1.Room();
        room.save();
        // CREATE CONTACT IN CONTACT LIST
        const contactListItem = new model_1.ContactList({
            users: [userId, contactId],
            roomId: room._id,
        });
        contactListItem.save();
        // FIND USER AND ADD CONTACT TO USER CONTACT LIST
        yield model_1.User.findByIdAndUpdate({ _id: userId }, { $push: { contactList: contactListItem._id } });
        // FIND USER AND ADD CONTACT TO OPPOSITE USER CONTACT LIST
        yield model_1.User.findByIdAndUpdate({ _id: contactId }, { $push: { contactList: contactListItem._id } });
        // UPDATE ROOM
        yield model_1.Room.findByIdAndUpdate({ _id: room._id }, { $push: { users: [userId, contactId] } });
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = addContact;
//# sourceMappingURL=add-contact.js.map