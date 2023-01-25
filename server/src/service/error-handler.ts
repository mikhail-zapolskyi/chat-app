import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors";
import { MongooseError, Validator } from "mongoose";

const error_handler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(err.message);
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ errors: err.getErrors() });
	}

	if (err.name === "ValidationError") {
		const errors: MongooseError = err.errors;
		console.log(errors);
		const messages: string[] = Object.values(errors).map(
			(i: Validator) => i.message!
		);
		return res.status(400).json({ errors: { message: messages[0] } });
	}

	if (err.name === "MongooseError") {
		return res.status(500).json({
			errors: {
				message: "Something went wrong adding you profile to database. We are working to fix this problem",
			},
		});
	}

	return res
		.status(500)
		.json({ errors: { message: "Something went wrong" } });
};

export default error_handler;
// this function helps to get any type of parameter and pass it to CastError type without asking missing values in type Error
const sendCastError = (err: any) => {
	return err;
};
