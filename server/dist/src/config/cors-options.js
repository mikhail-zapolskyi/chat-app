"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true,
};
exports.default = corsOptions;
//# sourceMappingURL=cors-options.js.map