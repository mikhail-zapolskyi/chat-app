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
	const messages = await Room.findOne({ _id: roomId }, { __v: 0 }).populate({
		path: "messages",
		select: {
			__v: 0,
			updatedAt: 0,
		},
	});

	const msg = await Room.aggregate([{ $match: { _id: roomId } }]);
	console.log(msg);
	// Send messages to client
	res.status(200).json(messages);
};

export default getMessagesByRoomId;
