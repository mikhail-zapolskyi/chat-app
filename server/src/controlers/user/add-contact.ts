import { Request, Response, NextFunction } from "express";
import { User } from "../../model";

const add_contact = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.body;
	const contact = await User.findOne({
		_id: id,
	});

	try {
		const user = await User.findByIdAndUpdate(
			{ _id: req.user?.id },
			{
				$push: {
					contacts: {
						email: contact?.email,
						name: contact?.name,
						id: contact?._id,
						avatar: contact?.avatar,
					},
				},
			},
			{ new: true }
		);

		res.status(200).json({ user, message: "Contact added" });
	} catch (error) {
		next(error);
	}
};

export default add_contact;
