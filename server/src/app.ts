import express from "express";
import http from "http";
import cors from "cors";
import { corsOptions, dbConnection, ioServer } from "./config";
import cookieSession from "cookie-session";
import router from "./routes";
import { error_handler, manage_online_status } from "./service";

const app = express();
const server: http.Server = http.createServer(app);
const io = ioServer(server);

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

io.on("connection", async (socket) => {
	// GET USER ID ON LOGIN
	const user = socket.handshake.auth;

	// MANAGE ONLINE STATUS VIA DATABASE
	let onlineStatus = await manage_online_status(user.id, true);

	// CHECK IF ONLINE STATUS NOT UNDEFINED
	if (await manage_online_status(user.id, true)) {
		io.emit("userConnected", onlineStatus);
	}

	socket.on("sendMessageToRoom", (data) => {
		const { message, room, userId } = data;
		socket.join(room);
		io.to(room).emit("message", { message, userId });
	});

	socket.on("disconnect", async () => {
		// CHECK IF USER ID PASSED ON LOGOUT
		if (user) {
			onlineStatus = await manage_online_status(user.id, false);
			// CHECK IF ONLINE STATUS NOT UNDEFINED
			if (onlineStatus) {
				io.emit("userDisconnected", onlineStatus);
			}
		}
	});
});

export default server;
