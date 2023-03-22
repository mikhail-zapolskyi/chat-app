import { Request, Response, NextFunction } from "express";
import { User, Room, ContactList } from "../../model";
import { IContactList } from "../../model/contactList.model";

const remove = async (req: Request, res: Response, next: NextFunction) => {
	const { userId, contactId } = req.body;

	const contactList: IContactList | null = await ContactList.findOne({
		users: { $elemMatch: { _id: userId } },
	});
	console.log(contactList);
	res.status(200).json({ message: "User Deleted" });
};

export default remove;
