import { Request, Response, NextFunction } from "express";

const user = (req: Request, res: Response, next: NextFunction) => {
	res.json({ user: req["user"] || null });
};

export default user;
