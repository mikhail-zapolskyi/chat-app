import { io } from "../app";
import { Socket } from "socket.io";
import { manage_conversations, manage_online_status } from "../service";

io.on("connection", async (socket: Socket) => {
	// GET USER ID ON LOGIN
	const { userId } = socket.handshake.auth;
	// MANAGE ONLINE STATUS VIA DATABASE
	let onlineStatus = await manage_online_status(userId, true);

	// CHECK IF ONLINE STATUS NOT UNDEFINED
	if (await manage_online_status(userId, true)) {
		io.emit("userConnected", onlineStatus);
	}

	socket.on("sendMessageToRoom", async (data) => {
		const { message, roomId, userId } = data;
		socket.join(roomId);
		io.to(roomId).emit("message", { message, userId });
		await manage_conversations(roomId, message, userId);
	});

	socket.on("disconnect", async () => {
		// CHECK IF USER ID PASSED ON LOGOUT
		if (userId) {
			onlineStatus = await manage_online_status(userId, false);
			// CHECK IF ONLINE STATUS NOT UNDEFINED
			if (onlineStatus) {
				io.emit("userDisconnected", onlineStatus);
			}
		}
	});
});
