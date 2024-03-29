import { User } from "../model";

const manageOnlineStatus = async (userId: string, status: boolean) => {
	await User.findOneAndUpdate(
		{ _id: userId },
		{ $set: { onlineStatus: status, lastTimeOnline: new Date() } },
		{ new: true, upsert: true }
	);
};

export default manageOnlineStatus;
