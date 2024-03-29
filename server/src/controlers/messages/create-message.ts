import { Message, Room } from "../../model";

const createNewMessage = async (
	roomId: string,
	message: string,
	userId: string
) => {
	// Create new message and save it to database
	const newMessage = new Message({ roomId, userId, message });
	await newMessage.save();

	// Push new message to room messages array
	await Room.findOneAndUpdate(
		{ _id: roomId },
		{
			$push: { messages: newMessage._id },
		},
		{ upsert: true, new: true }
	);

	return {
		id: newMessage._id,
		message: newMessage.message,
		userId: newMessage.userId,
		roomId: newMessage.roomId,
		createdAt: newMessage.createdAt,
		new: newMessage.new,
	};
};

export default createNewMessage;
