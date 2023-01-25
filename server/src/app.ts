import express, { urlencoded } from "express";
import cors from "cors";
import { corsOptions, dbConnection } from "./config";
import cookieSession from "cookie-session";
import router from "./routes";
import { error_handler } from "./service";

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(
	cookieSession({
		name: "user",
		secret: process.env.COOKIE_SECRET,
	})
);

dbConnection();

app.use("/api", router);

app.use(error_handler);

export default app;
