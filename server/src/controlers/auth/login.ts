import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../model/user";
import { BadRequest, AuthError } from "../../errors";
import { Password } from "../../service";

const login = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user) {
		return next(new BadRequest("User not found"));
	}

	const isPasswordCorrect = await Password.verify(password, user.password);

	if (!isPasswordCorrect) {
		return next(new AuthError("Please provide correct password"));
	}

	const chatToken = jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 3600,
			user,
		},
		process.env.COOKIE_SECRET!
	);

	req.session = { chatToken };
	res.json(user);
};

export default login;
