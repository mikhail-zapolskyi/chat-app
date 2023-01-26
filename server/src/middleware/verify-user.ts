import { Request, Response, NextFunction, request } from "express";
import jwt from "jsonwebtoken";
import { AuthError } from "../errors";
import { IUser } from "../interface";

interface IToken {
	user: {
		email: string;
		id: string;
	};
}

declare global {
	namespace Express {
		interface Request {
			user: IUser;
		}
	}
}

const verify_user = (req: Request, res: Response, next: NextFunction) => {
	console.log("verify");
	if (!req.session?.chatToken) {
		return res.json({ user: null });
	}

	try {
		const token = jwt.verify(
			req.session?.chatToken,
			process.env.COOKIE_SECRET!
		) as IToken;

		req.user = token.user;
		res.json({ user: req.user });
	} catch (error) {
		return next(new AuthError("You are not authenticated"));
	}
};

export default verify_user;
