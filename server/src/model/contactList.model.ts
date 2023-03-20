import { Schema, Types, model } from "mongoose";

export interface IContactList {
	userId: Types.ObjectId;
	contactId: Types.ObjectId;
	roomId: Types.ObjectId;
}

const contactListSchema = new Schema<IContactList>(
	{
		userId: { type: Schema.Types.ObjectId, ref: "User" },
		contactId: { type: Schema.Types.ObjectId, ref: "User" },
		roomId: { type: Schema.Types.ObjectId, ref: "Room" },
	},
	{ collection: "contactList" }
);

const ContactList = model<IContactList>("ContactList", contactListSchema);

export default ContactList;
