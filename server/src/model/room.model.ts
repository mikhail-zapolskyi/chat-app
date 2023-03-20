import { Schema, model, Types } from "mongoose";

export interface IRoom {
	_id: Types.ObjectId;
	messages: [Types.ObjectId];
	users: [Types.ObjectId];
}

const RoomSchema = new Schema<IRoom>(
	{
		users: [{ type: Schema.Types.ObjectId, ref: "User" }],
		messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
	},
	{ collection: "rooms" }
);

const Room = model<IRoom>("Room", RoomSchema);

export default Room;
