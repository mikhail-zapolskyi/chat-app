import { Schema, Types, model } from "mongoose";

export interface IContactList {
	userId: Types.ObjectId;
	roomId: Types.ObjectId;
	users: [Types.ObjectId];
}

const contactListSchema = new Schema<IContactList>(
	{
		userId: { type: Schema.Types.ObjectId, ref: "User" },
		roomId: { type: Schema.Types.ObjectId, ref: "Room" },
		users: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ collection: "contactList" }
);

const ContactList = model<IContactList>("ContactList", contactListSchema);

export default ContactList;
