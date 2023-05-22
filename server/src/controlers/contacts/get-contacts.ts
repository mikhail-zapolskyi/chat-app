import { Request, Response, NextFunction } from "express";
import { User } from "../../model";
import mongoose from "mongoose";

const getContacts = async (req: Request, res: Response, next: NextFunction) => {
	const userId = new mongoose.Types.ObjectId(req.body.userId);

	try {
		// FIND USER AND AGGREGATE CONTACT LIST WITH CONTACT ID AND ROOM ID
		const rawContactList = await User.aggregate([
			{ $match: { _id: userId } },
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
							cond: { $ne: ["$$user._id", userId] },
						},
					},
					roomId: "$contactList.roomId._id",
				},
			},
		]);

		// PULLS STRINGS FROM ARRAY TO DELIVER CONTACT OBJECT
		const contactList = rawContactList.map((contact) => {
			const {
				_id,
				email,
				name,
				avatar,
				onlineStatus,
				lastTimeOnline,
			} = contact.users[0];

			return {
				id: contact._id,
				contactId: _id,
				name,
				email,
				avatar,
				onlineStatus,
				roomId: contact.roomId[0],
				lastTimeOnline,
			};
		});

		return res.status(200).json({ contacts: contactList || [] });
	} catch (error) {
		next(error);
	}
};

export default getContacts;
