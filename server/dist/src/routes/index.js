"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const contacts_1 = __importDefault(require("./contacts"));
const messages_1 = __importDefault(require("./messages"));
const router = (0, express_1.Router)();
router.use(auth_1.default);
router.use(contacts_1.default);
router.use(messages_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map