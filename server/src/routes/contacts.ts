import { Router } from "express";
import { verify_user, validation_result } from "../middleware";
import { find } from "../controlers";
import { check } from "express-validator";

const router: Router = Router();

router.post(
	"/api/find-contact",
	verify_user,
	check("email").isEmail().withMessage("Email format is incorrect"),
	validation_result,
	find
);

export default router;
