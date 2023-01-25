import { CustomError } from "./";

class BadRequest extends CustomError {
	name: string = "BadRequest";

	constructor(message: string, statusCode: number = 400) {
		super(message, statusCode);
	}
}

export default BadRequest;
