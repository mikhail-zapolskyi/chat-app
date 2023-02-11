import { Schema, model } from "mongoose";
import { Password } from "../service/index";
import { IUser } from "../interface";

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
		contacts: [],
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
