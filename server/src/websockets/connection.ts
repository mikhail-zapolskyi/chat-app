import { io } from "../app";
import { Socket } from "socket.io";
import { create_new_message, manage_user_online } from "../service";

io.on("connection", async (socket: Socket) => {
	// GET USER ID ON LOGIN
	const { userId } = socket.handshake.auth;

	// CHANGE USER ONLINE STATUS TO TRUE ON LOGIN
	io.emit("userOnlineStatusChanged", async () => {
		await manage_user_online(userId, true);
	});

	socket.on("disconnect", async () => {
		// CHANGE USER ONLINE STATUS TO FALSE
		if (userId) {
			await manage_user_online(userId, false);
		}
	});

	socket.on("sendMessageToRoom", async (data) => {
		const { message, roomId, userId } = data;
		socket.join(roomId);
		io.to(roomId).emit("message", { message, userId });
		await create_new_message(roomId, message, userId);
	});
});
