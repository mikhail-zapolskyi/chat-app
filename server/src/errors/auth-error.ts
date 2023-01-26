import CustomError from "./custom-error";

class AuthError extends CustomError {
	name: string = "AuthError";

	constructor(message: string, statusCode: number = 401) {
		super(message, statusCode);
	}
}

export default AuthError;
