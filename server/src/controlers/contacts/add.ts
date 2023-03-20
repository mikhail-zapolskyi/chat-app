import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { User, Room, ContactList } from "../../model";
import { BadRequest } from "../../errors";

const add = async (req: Request, res: Response, next: NextFunction) => {
	const { userId, contactId } = req.body;

	if (!userId || !contactId) {
		return next(new BadRequest("Contact user not found"));
	}

	// CHECK IF USER IN CONTACT LIST OR NOT
	const isUserInContact = await ContactList.findOne({
		userId,
		contactId,
	});

	if (isUserInContact) {
		return next(new BadRequest("Contact already have been added"));
	}

	try {
		// CREATE PRIVATE ROOM FOR BOTH
		const room = new Room();
		room.save();

		const contactListItem = new ContactList({
			users: [userId, contactId],
			roomId: room._id,
		});
		contactListItem.save();
		// CREATE CONTACT FOR MAIN USER
		// const contact = new ContactList({
		// 	userId,
		// 	contactId,
		// 	roomId: room._id,
		// });
		// contact.save();

		// // CREATE FOR OPPOSITE USER
		// const oppositeContact = new ContactList({
		// 	userId: contactId,
		// 	contactId: userId,
		// 	roomId: room._id,
		// });
		// oppositeContact.save();

		// FIND USER AND ADD CONTACT TO USER CONTACT LIST
		await User.findByIdAndUpdate(
			{ _id: userId },
			{ $push: { contactList: contactListItem._id } }
		);

		// FIND USER AND ADD CONTACT TO OPPOSITE USER CONTACT LIST
		await User.findByIdAndUpdate(
			{ _id: contactId },
			{ $push: { contactList: contactListItem._id } }
		);

		// UPDATE ROOM
		await Room.findByIdAndUpdate(
			{ _id: room._id },
			{ $push: { users: [userId, contactId] } }
		);

		next();
	} catch (error) {
		next(error);
	}
};

export default add;
