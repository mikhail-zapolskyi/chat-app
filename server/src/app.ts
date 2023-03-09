import express, { Application } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { corsOptions, dbConnection, ioServer } from "./config";
import cookieSession from "cookie-session";
import router from "./routes";
import { error_handler } from "./service";

const app: Application = express();
const server: http.Server = http.createServer(app);
const io: Server = ioServer(server);

dbConnection();

app.use(express.json());
app.use(cors(corsOptions));
app.use(
	cookieSession({
		name: "chatToken",
		secret: process.env.COOKIE_SECRET,
	})
);

app.use("/", router);
app.use(error_handler);

export { server, io };
