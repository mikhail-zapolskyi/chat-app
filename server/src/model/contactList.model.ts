import { Schema, Types, model } from "mongoose";

export interface IContactList {
	_id: Types.ObjectId;
	roomId: Types.ObjectId;
	users: [Types.ObjectId];
}

const contactListSchema = new Schema<IContactList>(
	{
		roomId: { type: Schema.Types.ObjectId, ref: "Room" },
		users: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ collection: "contactList" }
);

const ContactList = model<IContactList>("ContactList", contactListSchema);

export default ContactList;
