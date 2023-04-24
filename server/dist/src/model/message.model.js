"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messagesSchema = new mongoose_1.Schema({
    roomId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Room", required: true },
    message: String,
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { collection: "messages", timestamps: true });
const Message = (0, mongoose_1.model)("Message", messagesSchema);
exports.default = Message;
//# sourceMappingURL=message.model.js.map