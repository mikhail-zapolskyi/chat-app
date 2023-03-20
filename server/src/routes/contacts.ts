import { Router } from "express";
import { verify_user, validation_result } from "../middleware";
import { find, add, user, fetch_contacts } from "../controlers";
import { check } from "express-validator";

const router: Router = Router();

router.post("/api/contacts/contact-list", verify_user, fetch_contacts);

router.post(
	"/api/contacts/find",
	verify_user,
	check("email").isEmail().withMessage("Email format is incorrect"),
	validation_result,
	find
);

router.patch("/api/contacts/add", verify_user, add, fetch_contacts);

export default router;
