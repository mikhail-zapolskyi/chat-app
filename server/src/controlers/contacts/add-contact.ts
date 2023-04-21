import { Request, Response, NextFunction } from "express";
import { User, Room, ContactList } from "../../model";
import { BadRequest } from "../../errors";

const addContact = async (req: Request, res: Response, next: NextFunction) => {
	const { userId, contactId } = req.body;

	if (!userId || !contactId) {
		return next(new BadRequest("Contact user not found"));
	}

	if (contactId === userId) {
		return next(new BadRequest("You can't add yourself"));
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

		// CREATE CONTACT IN CONTACT LIST
		const contactListItem = new ContactList({
			users: [userId, contactId],
			roomId: room._id,
		});
		contactListItem.save();

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

export default addContact;
