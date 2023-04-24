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
const app_1 = require("../app");
const controlers_1 = require("../controlers");
const service_1 = require("../service");
app_1.io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
    // GET USER ID ON LOGIN
    const { userId } = socket.handshake.auth;
    // CHANGE USER ONLINE STATUS TO TRUE ON LOGIN
    app_1.io.emit("userOnlineStatusChanged", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, service_1.manageOnlineStatus)(userId, true);
    }));
    socket.on("disconnect", () => __awaiter(void 0, void 0, void 0, function* () {
        // CHANGE USER ONLINE STATUS TO FALSE
        if (userId) {
            yield (0, service_1.manageOnlineStatus)(userId, false);
        }
    }));
    socket.on("sendMessageToRoom", (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { message, roomId, userId } = data;
        socket.join(roomId);
        const newMessage = yield (0, controlers_1.createNewMessage)(roomId, message, userId);
        app_1.io.to(roomId).emit("message", newMessage);
    }));
}));
//# sourceMappingURL=connection.js.map