import { Router, Response, Request, NextFunction } from "express";
import { register, login, user, logout } from "../controlers/auth";
import { check } from "express-validator";
import { validation_result, verify_user } from "../middleware";

const router = Router();

router.post(
	"/register",
	check("email").isEmail().withMessage("Email format is incorrect"),
	check("password")
		.exists()
		.notEmpty()
		.isLength({ min: 5 })
		.withMessage("Password must be at least 5 characters"),
	check("confirmPassword")
		.exists()
		.notEmpty()
		.custom((value, { req }) => value === req.body.password)
		.withMessage("Password and confirm password must match"),
	validation_result,
	register
);
router.post(
	"/login",
	check("email").isEmail().withMessage("Email format is incorrect"),
	check("password")
		.exists()
		.notEmpty()
		.withMessage("Please type correct password"),
	validation_result,
	login
);
router.post("/logout", logout);
router.get("/", verify_user, user);

export default router;
