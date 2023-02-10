import express, { NextFunction, Request, Response } from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { corsOptions, dbConnection, ioServer } from "./config";
import cookieSession from "cookie-session";
import router from "./routes";
import { error_handler } from "./service";

const app = express();
const server: http.Server = http.createServer(app);
export const io = ioServer(server);

app.use(express.json());
app.use(cors(corsOptions));
app.use(
	cookieSession({
		name: "chatToken",
		secret: process.env.COOKIE_SECRET,
	})
);

dbConnection();

app.use("/", router);

app.use(error_handler);

export default server;
