import express, { urlencoded } from "express";
import cors from "cors";
import { corsOptions, dbConnection } from "./config";
import cookieSession from "cookie-session";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(
	cookieSession({
		name: "user",
		secret: process.env.COOKIE_SECRET,
	})
);
app.use("/api", router);

dbConnection();

export default app;
