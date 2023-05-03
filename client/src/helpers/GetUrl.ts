export const getUrl = () => {
	const devUrl = "http://localhost:4000/api";
	const productionUrl = "https://chat-app-vlw6.onrender.com/api";
	const url =
		process.env.NODE_ENV === "development" ? devUrl : productionUrl;

	return url;
};

export const getSocketUrl = () => {
	const devUrl = "http://localhost:4000";
	const productionUrl = "https://chat-app-vlw6.onrender.com";
	const url =
		process.env.NODE_ENV === "development" ? devUrl : productionUrl;

	return url;
};
