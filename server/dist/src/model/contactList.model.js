"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactListSchema = new mongoose_1.Schema({
    roomId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Room" },
    users: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
}, { collection: "contactList" });
const ContactList = (0, mongoose_1.model)("ContactList", contactListSchema);
exports.default = ContactList;
//# sourceMappingURL=contactList.model.js.map