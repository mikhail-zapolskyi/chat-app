import "dotenv/config";
import server from "./src/app";

server.listen(process.env.PORT!, () => {
	console.log(`Server run on ${process.env.PORT}`);
});
