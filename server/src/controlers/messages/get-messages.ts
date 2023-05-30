import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { Room } from "../../model";
import { BadRequest } from "../../errors";

const getMessagesByRoomId = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Get roomId from params
	const { roomId } = req.params;
	const id = new mongoose.Types.ObjectId(roomId);

	// Check if roomId is valid
	if (!roomId) {
		return next(new BadRequest("Room #id is required"));
	}

	// Find room and aggregate messages
	const messages = await Room.aggregate([
		{ $match: { _id: id } },
		{
			$lookup: {
				from: "messages",
				localField: "_id",
				foreignField: "roomId",
				as: "messages",
			},
		},
		{ $unwind: "$messages" },
		{
			$project: {
				_id: 0,
				id: "$messages._id",
				roomId: "$messages.roomId",
				userId: "$messages.userId",
				message: "$messages.message",
				createdAt: "$messages.createdAt",
				new: "$messages.new",
			},
		},
	]);

	// Send messages to client
	res.status(200).json(messages);
};

export default getMessagesByRoomId;
