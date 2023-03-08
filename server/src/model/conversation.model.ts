import { Schema, model } from "mongoose";

interface IConversation {
	roomId: string;
	messages: [
		{
			userId: string;
			message: string;
			readStatus: boolean;
		}
	];
}

const messageSchema = new Schema<IConversation>(
	{
		roomId: { type: String, required: true },
		messages: [
			{
				userId: { type: String, required: true },
				message: { type: String },
				readStatus: Boolean,
			},
		],
	},
	{ collection: "conversation", timestamps: true }
);

const Conversation = model<IConversation>("Conversation", messageSchema);

export default Conversation;
