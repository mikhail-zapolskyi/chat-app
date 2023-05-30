import { Schema, model, Types } from "mongoose";

interface IMessage {
	roomId: Types.ObjectId;
	userId: Types.ObjectId;
	message: string;
	createdAt?: Date;
	new: Boolean;
}

const messagesSchema = new Schema<IMessage>(
	{
		roomId: { type: Schema.Types.ObjectId, ref: "Room", required: true },
		message: String,
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		new: { type: Boolean, default: true },
	},
	{ collection: "messages", timestamps: true }
);

const Message = model<IMessage>("Message", messagesSchema);

export default Message;
