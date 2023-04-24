"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = (req, res, next) => {
    res.status(200).json({ user: req["user"] || null });
};
exports.default = user;
//# sourceMappingURL=user.js.map