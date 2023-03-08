import { Conversation } from "../model";

const manage_conversations = async (
	roomId: string,
	message: string,
	userId: string
) => {
	await Conversation.updateOne(
		{ roomId },
		{ $push: { messages: { message, userId, readStatus: false } } },
		{ upsert: true, new: true }
	);

	const conversations = await Conversation.find({});

	console.log(conversations);
};

export default manage_conversations;
