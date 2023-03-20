import { Request, Response, NextFunction } from "express";
import { User, Room, ContactList } from "../../model";

const remove = async (req: Request, res: Response, next: NextFunction) => {
	const { userId, contactId } = req.body;

	res.status(200).json({ message: "User Deleted" });
};

export default remove;
