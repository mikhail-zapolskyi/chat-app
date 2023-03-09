import { Conversation } from "../model";

const manage_conversations = async (
	roomId: string,
	message: string,
	userId: string
) => {
	await Conversation.findOneAndUpdate(
		{ roomId },
		{ $push: { messages: { message, userId, readStatus: false } } },
		{ upsert: true, new: true }
	);
};

export default manage_conversations;
