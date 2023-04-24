"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const error_handler = (err, req, res, next) => {
    if (err instanceof errors_1.CustomError) {
        return res.status(err.statusCode).json({ errors: err.getErrors() });
    }
    if (err.name === "ValidationError") {
        const errors = err.errors;
        const messages = Object.values(errors).map((i) => i.message);
        return res.status(400).json({ errors: { message: messages[0] } });
    }
    if (err.name === "MongoServerError" && err.code === 11000) {
        return res
            .status(400)
            .json({ errors: { message: "User already exist" } });
    }
    if (err.name === "MongooseError") {
        return res.status(500).json({
            errors: {
                message: "Something went wrong adding you profile to database. We are working to fix this problem",
            },
        });
    }
    console.log(err);
    return res
        .status(500)
        .json({ errors: { message: "Something went wrong" } });
};
exports.default = error_handler;
//# sourceMappingURL=error-handler.js.map