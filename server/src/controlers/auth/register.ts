import { Request, Response, NextFunction } from "express";
import { User } from "../../model/user";
import { validationResult } from "express-validator";
import { BadRequest } from "../../errors";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;
	const errors: string[] = validationResult(req)
		.array()
		.map((i) => i.msg);

	if (errors.length > 0) {
		return next(new BadRequest(errors[0]));
	}

	const user = new User({ email, password });

	user.save()
		.then((data) => {
			const chatToken = jwt.sign(
				{
					exp: Math.floor(Date.now() / 1000) + 3600,
					user,
				},
				process.env.COOKIE_SECRET!
			);

			req.session = { chatToken };
			res.json({ user: data, message: "You succefully registred" });
		})
		.catch((err) => {
			return next(err);
		});
};

export default register;
