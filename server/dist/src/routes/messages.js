"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const controlers_1 = require("../controlers");
const router = (0, express_1.Router)();
router.post("/api/rooms/:roomId/messages", middleware_1.verify_user, controlers_1.getMessagesByRoomId);
router.delete("/api/messages/:messageId", middleware_1.verify_user, controlers_1.deleteMessageById);
exports.default = router;
//# sourceMappingURL=messages.js.map