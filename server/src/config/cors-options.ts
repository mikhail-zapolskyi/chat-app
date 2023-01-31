const corsOptions = {
	origin: ["http://localhost:3000"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	credentials: true,
};

export default corsOptions;
