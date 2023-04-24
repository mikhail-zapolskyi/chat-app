"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logout = (req, res, next) => {
    req.session = null;
    res.status(200).json({ user: null, message: "You have been logged out" });
};
exports.default = logout;
//# sourceMappingURL=logout.js.map