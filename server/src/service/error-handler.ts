import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors";
import { MongooseError, Validator } from "mongoose";

const error_handler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ errors: err.getErrors() });
	}

	if (err.name === "ValidationError") {
		const errors: MongooseError = err.errors;
		const messages: string[] = Object.values(errors).map(
			(i: Validator) => i.message!
		);
		res.json({ errors: { message: [messages] } });
	}

	res.status(500).json({ errors: { message: ["something went wrong"] } });
};

export default error_handler;
// this function helps to get any type of parameter and pass it to CastError type without asking missing values in type Error
const sendCastError = (err: any) => {
	return err;
};
