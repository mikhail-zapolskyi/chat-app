import { io } from "../app";
import { Socket } from "socket.io";
import { createNewMessage } from "../controlers";
import { manageOnlineStatus } from "../service";

io.on("connection", async (socket: Socket) => {
	// GET USER ID ON LOGIN
	const { userId } = socket.handshake.auth;

	// CHANGE USER ONLINE STATUS TO TRUE ON LOGIN
	io.emit("userOnlineStatusChanged", async () => {
		await manageOnlineStatus(userId, true);
	});

	socket.on("disconnect", async () => {
		// CHANGE USER ONLINE STATUS TO FALSE
		if (userId) {
			await manageOnlineStatus(userId, false);
		}
	});

	socket.on("sendMessageToRoom", async (data) => {
		const { message, roomId, userId } = data;
		socket.join(roomId);
		io.to(roomId).emit("message", { message, userId });
		await createNewMessage(roomId, message, userId);
	});
});
