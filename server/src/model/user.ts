import { Schema, model } from "mongoose";

interface IUser {
	name?: string;
	email: string;
	avatar?: string;
	password: string;
}

const userSchema = new Schema<IUser>({
	name: { type: String },
	email: { type: String, required: [true, "Please provide an email"] },
	avatar: String,
	password: { typs: String, required: [true, "Please provide a password"] },
});

export const User = model<IUser>("User", userSchema);
