import { Request, Response, NextFunction } from "express";
import { User } from "../../model";
import { BadRequest } from "../../errors";

const findContactByEmail = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email } = req.body;
	const contact = await User.findOne(
		{ email: email.toLowerCase() },
		{ email: 1, id: 1, name: 1, avatar: 1 }
	);

	if (!contact) {
		return next(new BadRequest("Contact not found"));
	}

	res.status(200).json({
		contact,
	});
};

export default findContactByEmail;
