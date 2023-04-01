// Delete message by id
// Path: server/src/controlers/messages/delete.ts

import { Request, Response, NextFunction } from "express";
import { Message, Room } from "../../model";
import { BadRequest } from "../../errors";

const deleteMessageById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Get messageId from params
	const { messageId } = req.params;

	// Check if messageId is valid
	if (!messageId) {
		return next(new BadRequest("Message #id is required"));
	}

	// Delete message
	const message = await Message.findOne({ _id: messageId });

	if (!message) {
		return next(new BadRequest("Message not found"));
	}

	await message.remove();

	// Delete message from Room message array
	await Room.findOneAndUpdate(
		{ _id: message.roomId },
		{ $pull: { messages: message._id } }
	);

	// Send message to client
	res.status(200).json({ id: message._id });
};

export default deleteMessageById;
