"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.io = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const routes_1 = __importDefault(require("./routes"));
const config_1 = require("./config");
const service_1 = require("./service");
const app = (0, express_1.default)();
exports.app = app;
const server = http_1.default.createServer(app);
exports.server = server;
const io = (0, config_1.ioServer)(server);
exports.io = io;
app.use(express_1.default.json());
app.use((0, cors_1.default)(config_1.corsOptions));
app.use((0, cookie_session_1.default)({
    name: "chatToken",
    secret: process.env.COOKIE_SECRET,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
}));
app.use("/", routes_1.default);
app.use(service_1.error_handler);
//# sourceMappingURL=app.js.map