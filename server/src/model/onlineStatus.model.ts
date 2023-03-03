import { Schema, model } from "mongoose";

interface IOnlineStatus {
	userId: string;
	online: boolean;
}

const onlineStatusSchema = new Schema<IOnlineStatus>(
	{
		userId: String,
		online: Boolean,
	},
	{ collection: "online" }
);

const OnlineStatus = model<IOnlineStatus>("OnlineStatus", onlineStatusSchema);

export default OnlineStatus;
