import mongoose from "mongoose";

interface ConnectionResultInterface {
	connection: string;
	state: number;
	dbName: string;
}

const username: string = process.env.DB_USERNAME!;
const password: string = process.env.DB_PASSWORD!;
const cluster: string = process.env.DB_CLUSTER!;

const dbConnection = () =>
	mongoose.createConnection(
		`mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`,
		{ dbName: "chat" },
		(err, res) => {
			if (err) {
				console.log(err);
			}

			const result: ConnectionResultInterface = {
				connection: "Connection to db successfull",
				state: res.readyState!,
				dbName: res.name!,
			};

			return result;
		}
	);

export default dbConnection;
