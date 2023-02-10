import { Request, Response, NextFunction } from "express";
import { User } from "../../model";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;

	const user = new User({ email, password });

	user.save()
		.then((data) => {
			const chatToken = jwt.sign(
				{
					exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour
					user,
				},
				process.env.COOKIE_SECRET!
			);

			req.session = { chatToken };
			res.status(201).json({
				user: data,
				message: "You succefully registred",
			});
		})
		.catch((err) => {
			return next(err);
		});
};

export default register;
