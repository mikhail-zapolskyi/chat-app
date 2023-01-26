import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { BadRequest } from "../errors";

const validation_result = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const errors: string[] = validationResult(req)
		.array()
		.map((i) => i.msg);

	if (errors.length > 0) {
		return next(new BadRequest(errors[0]));
	}

	next();
};

export default validation_result;
