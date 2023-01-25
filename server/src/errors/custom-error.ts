class CustomError extends Error {
	name: string = "CustomError";
	statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);

		this.statusCode = statusCode;
	}

	getErrors() {
		return { message: this.message };
	}
}

export default CustomError;
