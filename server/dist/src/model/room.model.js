"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoomSchema = new mongoose_1.Schema({
    users: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    messages: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Message" }],
}, { collection: "rooms" });
const Room = (0, mongoose_1.model)("Room", RoomSchema);
exports.default = Room;
//# sourceMappingURL=room.model.js.map