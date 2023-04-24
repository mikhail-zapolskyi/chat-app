import { Request, Response, NextFunction } from "express";
import { BadRequest } from "../../errors";
import { User, Room, Message, ContactList } from "../../model";
import { IContactList } from "../../model/contactList.model";

const remove = async (req: Request, res: Response, next: NextFunction) => {
	const { userId, contactId } = req.body;

	const contactList: IContactList = await ContactList.findOne(
		{
			users: { $all: [userId, contactId] },
		},
		{ __v: 0, users: 0 }
	);

	if (!contactList) {
		return next(new BadRequest("Contact list not found"));
	}

	// FIND USER AND REMOVE CONTACT FROM USER CONTACT LIST
	await User.findByIdAndUpdate(
		{ _id: userId },
		{ $pull: { contactList: contactList._id } }
	);

	// FIND CONTACT AND REMOVE USER FROM CONTACT CONTACT LIST
	await User.findByIdAndUpdate(
		{ _id: contactId },
		{ $pull: { contactList: contactList._id } }
	);

	// FIND AND REMOVE ALL MESSAGES
	await Message.deleteMany({ roomId: contactList.roomId });

	// FIND AND REMOVE ROOM
	await Room.findByIdAndDelete({ _id: contactList.roomId });

	// REMOVE CONTACT LIST
	await ContactList.findByIdAndDelete({ _id: contactList._id });

	res.status(200).json(contactList);
};

export default remove;
