import { Request, Response, NextFunction } from "express";
import { User } from "../../model";
import { BadRequest } from "../../errors";

const find = async (req: Request, res: Response, next: NextFunction) => {
	const { email } = req.body;
	const contact = await User.findOne({ email });

	if (!contact) {
		return next(new BadRequest("Contact not found"));
	}

	res.status(200).json({
		contact: { email: contact.email, id: contact.id },
	});
};

export default find;
