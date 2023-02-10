import { Request, Response, NextFunction } from "express";
import { io } from "../../app";

const chat = (req: Request, res: Response, next: NextFunction) => {
	const { message, room, user } = req.body;
	console.log(room);
	io.on("connection", (socket) => {
		socket.join(room);
	});

	io.to(room).emit("message", { message, room, user });

	res.status(200).json({ message: "Message Sent" });
};

export default chat;
