import "dotenv/config";
import app from "./src/app";

app.listen(process.env.PORT, () => {
	console.log(`Server run on ${process.env.PORT}`);
});
