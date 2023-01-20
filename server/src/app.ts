import express from "express";
import cors from "cors";
import { corsOptions, dbConnection } from "./config";
import cookieSession from "cookie-session";

const app = express();

app.use(cors(corsOptions));
app.use(
	cookieSession({
		name: "user",
		secret: process.env.COOKIE_SECRET,
	})
);

dbConnection();

export default app;
