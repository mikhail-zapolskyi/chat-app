"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlers_1 = require("../controlers");
const express_validator_1 = require("express-validator");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.post("/api/register", (0, express_validator_1.check)("email").isEmail().withMessage("Email format is incorrect"), (0, express_validator_1.check)("password")
    .exists()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters"), (0, express_validator_1.check)("confirmPassword")
    .exists()
    .notEmpty()
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Password and confirm password must match"), middleware_1.validation_result, controlers_1.register);
router.post("/api/login", (0, express_validator_1.check)("email").isEmail().withMessage("Email format is incorrect"), (0, express_validator_1.check)("password")
    .exists()
    .notEmpty()
    .withMessage("Please type correct password"), middleware_1.validation_result, controlers_1.login);
router.post("/api/logout", controlers_1.logout);
router.get("/api/user", middleware_1.verify_user, controlers_1.user);
exports.default = router;
//# sourceMappingURL=auth.js.map