import { Request, Response, NextFunction, request } from "express";
import jwt from "jsonwebtoken";
import { AuthError } from "../errors";

interface IGlobalUser {
	email: string;
	id: string;
}

interface ITokenPayload {
	user: {
		email: string;
		id: string;
	};
}

declare global {
	namespace Express {
		interface Request {
			user?: IGlobalUser | null;
		}
	}
}

const verify_user = (req: Request, res: Response, next: NextFunction) => {
	if (!req.session?.chatToken) {
		return res.json({ user: null });
	}

	try {
		const token = jwt.verify(
			req.session?.chatToken,
			process.env.COOKIE_SECRET!
		) as ITokenPayload;

		req.user = token.user;
	} catch (error) {
		return next(new AuthError("You are not authenticated"));
	}

	next();
};

export default verify_user;
