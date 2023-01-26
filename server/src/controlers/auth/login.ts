import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { User } from "../../model/user";
import { BadRequest } from "../../errors";

const login = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;

	const errors: string[] = validationResult(req)
		.array()
		.map((i) => i.msg);

	if (errors.length > 0) {
		return next(new BadRequest(errors[0]));
	}

	if (req.user) {
		console.log("req.user");
		res.json({ user: req.user });
	}

	const user = await User.findOne({ email });
	console.log("user");
	res.json({ user: user || null });
};

export default login;
