"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class BadRequest extends _1.CustomError {
    constructor(message, statusCode = 400) {
        super(message, statusCode);
        this.name = "BadRequest";
    }
}
exports.default = BadRequest;
//# sourceMappingURL=bad-request-error.js.map