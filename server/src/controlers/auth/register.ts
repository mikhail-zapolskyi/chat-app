import { User } from "../../model/user";
import { Request, Response, NextFunction } from "express";

const register = (req: Request, res: Response, next: NextFunction) => {
	const { username, password } = req.body;
};

export default register;
