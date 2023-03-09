import "dotenv/config";
import { server } from "./src/app";
import "./src/websockets/connection";

server.listen(process.env.PORT || 4000, () => {
	console.log(`Server run on ${process.env.PORT}`);
});
