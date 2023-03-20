import { Schema, model, Types } from "mongoose";
import { Password } from "../service/index";

export interface IUser {
	name?: string;
	email: string;
	avatar?: string;
	password: string;
	contactList?: string[];
	onlineStatus: boolean;
}

const userSchema = new Schema<IUser>(
	{
		name: { type: String },
		email: {
			type: String,
			unique: true,
			required: [true, "Please provide an email"],
		},
		avatar: String,
		password: {
			type: String,
			required: [true, "Please provide a password"],
		},
		contactList: [
			{
				type: Schema.Types.ObjectId,
				ref: "ContactList",
			},
		],
		onlineStatus: { type: Boolean, default: false },
	},
	{
		collection: "users",
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
				delete ret.createdAt;
				delete ret.updatedAt;
			},
		},
	}
);

userSchema.pre("save", async function (done) {
	if (this.isModified("password")) {
		const hashPassword: string = await Password.hash(this.password);
		this.password = hashPassword;
	}

	done();
});

const User = model<IUser>("User", userSchema);

export default User;
