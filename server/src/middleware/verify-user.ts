import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthError } from "../errors";
import { User } from "../model";
import { IUser } from "../model/user.model";

interface ITokenPayload extends JwtPayload {
	id: string;
}

declare global {
	namespace Express {
		interface Request {
			user?: IUser | null;
		}
	}
}

const verify_user = async (req: Request, res: Response, next: NextFunction) => {
	if (!req.session.chatToken) {
		return res.json({ user: null });
	}

	try {
		const token = jwt.verify(
			req.session?.chatToken,
			process.env.COOKIE_SECRET!
		) as ITokenPayload;

		const user = await User.findById(
			{ _id: token.id },
			{ __v: 0, password: 0 }
		);

		req.user = user;
	} catch (error) {
		return next(new AuthError("You are not authenticated"));
	}

	next();
};

export default verify_user;
