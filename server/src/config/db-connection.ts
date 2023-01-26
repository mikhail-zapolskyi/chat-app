import mongoose from "mongoose";

interface IConnectionResult {
	connection: string;
	state: number;
	dbName: string;
}

const DB_URL: string = process.env.DB_URL!;

const dbConnection = () => {
	mongoose.set("strictQuery", false);
	mongoose
		.connect(DB_URL, { dbName: "chat" })
		.then((res) => {
			if (res.connection.readyState === 1) {
				const result: IConnectionResult = {
					connection: "Connection to db successfull",
					state: res.connection.readyState,
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
