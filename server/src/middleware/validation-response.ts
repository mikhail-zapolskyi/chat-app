import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { BadRequest } from "../errors";

const validation_result = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const validation = validationResult(req);
	const errors: string[] = validation.array().map((i) => i.msg);

	if (!validation.isEmpty()) {
		return next(new BadRequest(errors[0]));
	}

	next();
};

export default validation_result;
