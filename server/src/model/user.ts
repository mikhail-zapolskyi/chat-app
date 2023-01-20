import { Schema, model } from "mongoose";
import { Password } from "../service/index";

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

userSchema.pre("save", async function (done) {
	if (this.isModified("password")) {
		const hashPassword = await Password.hash(this.password);
		this.password = hashPassword;
	}

	done();
});

export const User = model<IUser>("User", userSchema);
