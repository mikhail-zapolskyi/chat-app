"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const ioServer = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "http://localhost:3000",
        },
    });
    return io;
};
exports.default = ioServer;
//# sourceMappingURL=io-server.js.map