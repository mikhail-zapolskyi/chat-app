import { Request, Response, NextFunction } from "express";
import { User } from "../../model/user";
import { validationResult } from "express-validator";
import { BadRequest } from "../../errors";

const register = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password, confirmPassword } = req.body;
	const errors: string[] = validationResult(req)
		.array()
		.map((i) => i.msg);

	if (errors.length > 0) {
		return next(new BadRequest(errors[0]));
	}

	const user = await User.create({ email, password });

	await user
		.save()
		.then((data) => {
			console.log(data);
			req.session = user;
			res.json(data);
		})
		.catch((err) => {
			return next(err);
		});
};

export default register;
