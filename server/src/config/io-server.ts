import { Server } from "socket.io";
import http from "http";

const ioServer = (server: http.Server) => {
	interface ServerToClientEvents {
		noArg: () => void;
		basicEmit: (a: number, b: string, c: Buffer) => void;
		withAck: (d: string, callback: (e: number) => void) => void;
	}

	interface ClientToServerEvents {
		hello: () => void;
	}

	interface InterServerEvents {
		ping: () => void;
	}

	interface SocketData {
		name: string;
		age: number;
	}

	const io: Server = new Server<
		ClientToServerEvents,
		ServerToClientEvents,
		InterServerEvents,
		SocketData
	>(server);

	return io;
};

export default ioServer;
