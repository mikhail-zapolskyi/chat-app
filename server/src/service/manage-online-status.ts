import { OnlineStatus, User } from "../model";

const manage_online_status = async (userId: string, onlineStatus: boolean) => {
	// IF USER DOESN'T EXIST DELETE STATUS
	const user = await User.findOne({ _id: userId });
	if (!user) {
		await OnlineStatus.findOneAndDelete({ userId });
		return;
	}

	//  IF STATUS DOESN'T EXIST CREATE STATUS FOR USER OR UPDATE
	await OnlineStatus.updateOne(
		{ userId },
		{ userId, online: onlineStatus },
		{ upsert: true }
	);
	// GET ALL STATUSES
	const onlineStatusArr = await OnlineStatus.find({}, { _id: 0, __v: 0 });

	// RETURN ALL STATUSES
	return onlineStatusArr;
};

export default manage_online_status;
