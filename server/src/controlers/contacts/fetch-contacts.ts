import { Request, Response, NextFunction } from "express";
import { User } from "../../model";
import mongoose from "mongoose";

const fetch_contacts = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userId } = req.body;
	const id = new mongoose.Types.ObjectId(userId);

	try {
		// FIND USER AND AGGREGATE CONTACT LIST WITH CONTACT ID AND ROOM ID
		const rawContactList = await User.aggregate([
			{ $match: { _id: id } },
			{
				$lookup: {
					from: "contactList",
					localField: "contactList",
					foreignField: "_id",
					as: "contactList",
				},
			},
			{ $unwind: "$contactList" },
			{
				$lookup: {
					from: "users",
					localField: "contactList.users",
					foreignField: "_id",
					as: "users",
				},
			},
			{
				$lookup: {
					from: "rooms",
					localField: "contactList.roomId",
					foreignField: "_id",
					as: "contactList.roomId",
				},
			},
			{
				$project: {
					_id: "$contactList._id",
					users: {
						$filter: {
							input: "$users",
							as: "user",
							cond: { $ne: ["$$user._id", id] },
						},
					},
					roomId: "$contactList.roomId._id",
				},
			},
		]);

		// PULLS STRINGS FROM ARRAY TO DELIVER CONTACT OBJECT
		const contactList = rawContactList.map((contact) => {
			const { _id, email, onlineStatus } = contact.users[0];

			return {
				id: contact._id,
				contactId: _id,
				email: email,
				onlineStatus: onlineStatus,
				roomId: contact.roomId[0],
			};
		});

		return res.status(200).json({ contacts: contactList || [] });
	} catch (error) {
		next(error);
	}
};

export default fetch_contacts;
