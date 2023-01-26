import CustomError from "./custom-error";

class UserValidationError extends CustomError {
	name: string = "UserValidationError";
	statusCode: number = 400;
}

export default UserValidationError;
