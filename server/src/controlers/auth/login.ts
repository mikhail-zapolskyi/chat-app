import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../model";
import { BadRequest, AuthError } from "../../errors";
import { Password } from "../../service";

const login = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user) {
		return next(new BadRequest("User not found"));
	}

	user.onlineStatus = true;

	const isPasswordCorrect = await Password.verify(password, user.password);

	if (!isPasswordCorrect) {
		return next(new AuthError("Please provide correct password"));
	}

	const chatToken = jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour
			user,
		},
		process.env.COOKIE_SECRET!
	);

	req.session = { chatToken };
	res.status(200).json({ user, message: "You succesfully logged in" });
};

export default login;
