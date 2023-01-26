import { Router, Response, Request, NextFunction } from "express";
import { register } from "../controlers/auth";
import { verify_user } from "../middleware";
import { check } from "express-validator";

const router = Router();

router.post(
	"/register",
	check("email").isEmail().withMessage("Email format is incorrect"),
	check("password")
		.exists()
		.isLength({ min: 5 })
		.withMessage("Password must be at least 5 characters"),
	check("confirmPassword")
		.exists()
		.custom((value, { req }) => value === req.body.password)
		.withMessage("Password and confirm password must match"),
	register
);

router.post(
	"/login",
	verify_user,
	(req: Request, res: Response, next: NextFunction) => {
		console.log("works");
		res.send("Login");
	}
);

router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
	res.send("Logout");
});

export default router;
