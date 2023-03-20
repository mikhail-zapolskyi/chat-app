import { Request, Response, NextFunction } from "express";
import { Message, Room } from "../../model";

const getMessagesByRoomId = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { roomId } = req.body;

	const messages = await Room.findOne({ _id: roomId }).populate({
		path: "messages",
	});

	res.status(200).json(messages);
};

export default getMessagesByRoomId;
