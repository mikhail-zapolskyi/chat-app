import { Router } from "express";
import { verify_user, validation_result } from "../middleware";
import {
	findContactByEmail,
	addContact,
	getContacts,
	remove,
} from "../controlers";
import { check } from "express-validator";

const router: Router = Router();

router.post("/contacts/contact-list", verify_user, getContacts);
router.post(
	"/contacts/find",
	verify_user,
	check("email").isEmail().withMessage("Email format is incorrect"),
	validation_result,
	findContactByEmail
);
router.patch("/contacts/add", verify_user, addContact, getContacts);
router.delete("/contacts/remove", verify_user, remove);

export default router;
