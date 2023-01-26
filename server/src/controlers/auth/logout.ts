import { Request, Response, NextFunction } from "express";

const logout = (req: Request, res: Response, next: NextFunction) => {
	req.session = null;
	res.json({ message: "You have been logged out" });
};

export default logout;
