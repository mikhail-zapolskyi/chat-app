"use strict";
// Delete message by id
// Path: server/src/controlers/messages/delete.ts
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
const deleteMessageById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Get messageId from params
    const { messageId } = req.params;
    // Check if messageId is valid
    if (!messageId) {
        return next(new errors_1.BadRequest("Message #id is required"));
    }
    // Delete message
    const message = yield model_1.Message.findOne({ _id: messageId });
    if (!message) {
        return next(new errors_1.BadRequest("Message not found"));
    }
    yield message.remove();
    // Delete message from Room message array
    yield model_1.Room.findOneAndUpdate({ _id: message.roomId }, { $pull: { messages: message._id } });
    // Send message to client
    res.status(200).json({ id: message._id });
});
exports.default = deleteMessageById;
//# sourceMappingURL=delete-message.js.map