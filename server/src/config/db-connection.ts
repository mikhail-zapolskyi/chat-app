import mongoose from "mongoose";
import "dotenv/config";

interface IConnectionResult {
	connection: string;
	dbName: string;
}

const DB_URL: string = process.env.DB_URL!;

const dbConnection = async () => {
	await mongoose.set("strictQuery", false);
	await mongoose
		.connect(DB_URL, { dbName: "chat" })
		.then((res) => {
			if (res.connection.readyState === 1) {
				const result: IConnectionResult = {
					connection: "Connection to db successfull",
					dbName: res.connection.db.namespace,
				};

				console.log(result);
			}
		})
		.catch((err) => {
			if (err) {
				console.log(err);
			}
		});
};

export default dbConnection;
