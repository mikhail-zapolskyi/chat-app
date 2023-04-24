"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const controlers_1 = require("../controlers");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/api/contacts/contact-list", middleware_1.verify_user, controlers_1.getContacts);
router.post("/api/contacts/find", middleware_1.verify_user, (0, express_validator_1.check)("email").isEmail().withMessage("Email format is incorrect"), middleware_1.validation_result, controlers_1.findContactByEmail);
router.patch("/api/contacts/add", middleware_1.verify_user, controlers_1.addContact, controlers_1.getContacts);
router.delete("/api/contacts/remove", middleware_1.verify_user, controlers_1.remove);
exports.default = router;
//# sourceMappingURL=contacts.js.map