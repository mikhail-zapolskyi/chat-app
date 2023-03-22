import mongoose from "mongoose";

const dbDisconnect = async () => {
	await mongoose.disconnect();
};

export default dbDisconnect;
