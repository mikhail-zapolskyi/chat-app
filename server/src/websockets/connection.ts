import { io } from "../app";
import { Socket } from "socket.io";
import { createNewMessage } from "../controlers";
import { manageOnlineStatus } from "../service";
import { User } from "../model";

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
		const newMessage = await createNewMessage(roomId, message, userId);
		io.to(roomId).emit("message", newMessage);
	});

	socket.on("addContact", async (data) => {
		const { userId, contactId } = data;
		io.emit("contactAdded", { userId, contactId });
	});

	socket.on("removeContact", async (data) => {
		const { userId, contactId } = data;
		io.emit("contactRemoved", { userId, contactId });
	});

	socket.on("changeUserInfo", async (user) => {
		const u = await User.findOneAndUpdate({ _id: user.id }, user, {
			new: true,
		});
		await u.save();

		io.emit("userInfoChanged", user);
	});
});
