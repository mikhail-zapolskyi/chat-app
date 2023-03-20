import { Message, Room } from "../model";

const create_new_message = async (
	roomId: string,
	message: string,
	userId: string
) => {
	// CREATE NEW MESSAGE
	const newMessage = new Message({ roomId, userId, message });
	await newMessage.save();

	// PASS AN ID OF NEW CREATED MESSAGE TO ROOM MESSAGES ARRAY
	await Room.findOneAndUpdate(
		{ _id: roomId },
		{
			$push: { messages: newMessage._id },
		},
		{ upsert: true, new: true }
	);
};

export default create_new_message;
