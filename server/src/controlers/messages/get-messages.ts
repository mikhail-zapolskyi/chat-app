import { Request, Response, NextFunction } from "express";
import { Room } from "../../model";
import { BadRequest } from "../../errors";

const getMessagesByRoomId = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Get roomId from params
	const { roomId } = req.params;

	// Check if roomId is valid
	if (!roomId) {
		return next(new BadRequest("Room #id is required"));
	}

	// Find room by roomId and populate messages
	const messages = await Room.findOne({ _id: roomId }).populate({
		path: "messages",
	});

	// Send messages to client
	res.status(200).json(messages);
};

export default getMessagesByRoomId;
