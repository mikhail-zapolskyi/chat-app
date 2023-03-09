import { Request, Response, NextFunction } from "express";
import { Conversation } from "../../model";

const getConversationByRoomId = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { roomId } = req.body;
	const conversations = await Conversation.findOne(
		{ roomId },
		{ _id: 0, __v: 0, createdAt: 0 }
	);
	res.status(200).json(conversations);
};

export default getConversationByRoomId;
