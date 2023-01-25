import { Request, Response, NextFunction } from "express";
import { User } from "../../model/user";
import { IUser } from "../../interface";
import { BadRequest } from "../../errors";

const register = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;

	const user = await new User<IUser>(email, password);
	user.save()
		.then((data) => {
			req.session = user;
			res.json(data);
		})
		.catch((err) => {
			return next(err);
		});
};

export default register;
