import { User } from "../model";

const manage_user_online = async (userId: string, status: boolean) => {
	await User.findOneAndUpdate(
		{ _id: userId },
		{ $set: { onlineStatus: status } },
		{ new: true, upsert: true }
	);
};

export default manage_user_online;
