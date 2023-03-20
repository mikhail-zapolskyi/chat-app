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
		return res.status(400).json({ errors: { message: messages[0] } });
	}

	if (err.name === "MongoServerError" && err.code === 11000) {
		return res
			.status(400)
			.json({ errors: { message: "User already exist" } });
	}

	if (err.name === "MongooseError") {
		return res.status(500).json({
			errors: {
				message: "Something went wrong adding you profile to database. We are working to fix this problem",
			},
		});
	}
	console.log(err);
	return res
		.status(500)
		.json({ errors: { message: "Something went wrong" } });
};

export default error_handler;
