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
const createNewMessage = (roomId, message, userId) => __awaiter(void 0, void 0, void 0, function* () {
    // Create new message and save it to database
    const newMessage = new model_1.Message({ roomId, userId, message });
    yield newMessage.save();
    // Push new message to room messages array
    yield model_1.Room.findOneAndUpdate({ _id: roomId }, {
        $push: { messages: newMessage._id },
    }, { upsert: true, new: true });
    return {
        id: newMessage._id,
        message: newMessage.message,
        userId: newMessage.userId,
        roomId: newMessage.roomId,
        createdAt: newMessage.createdAt,
    };
});
exports.default = createNewMessage;
//# sourceMappingURL=create-message.js.map