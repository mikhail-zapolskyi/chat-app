import { Schema, model } from "mongoose";

interface IMessage {
	userId: string;
	message: string;
	room: string;
}

const messageSchema = new Schema<IMessage>(
	{
		userId: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		room: {
			type: String,
			required: true,
		},
	},
	{ collection: "messages", timestamps: true }
);

const Message = model<IMessage>("Message", messageSchema);

export default Message;
