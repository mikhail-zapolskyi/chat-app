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
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("../../model");
const errors_1 = require("../../errors");
const getMessagesByRoomId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Get roomId from params
    const { roomId } = req.params;
    const id = new mongoose_1.default.Types.ObjectId(roomId);
    // Check if roomId is valid
    if (!roomId) {
        return next(new errors_1.BadRequest("Room #id is required"));
    }
    // Find room and aggregate messages
    const messages = yield model_1.Room.aggregate([
        { $match: { _id: id } },
        {
            $lookup: {
                from: "messages",
                localField: "_id",
                foreignField: "roomId",
                as: "messages",
            },
        },
        { $unwind: "$messages" },
        {
            $project: {
                _id: 0,
                id: "$messages._id",
                roomId: "$messages.roomId",
                userId: "$messages.userId",
                message: "$messages.message",
                createdAt: "$messages.createdAt",
            },
        },
    ]);
    // Send messages to client
    res.status(200).json(messages);
});
exports.default = getMessagesByRoomId;
//# sourceMappingURL=get-messages.js.map