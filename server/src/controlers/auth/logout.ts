import { Request, Response, NextFunction } from "express";

const logout = (req: Request, res: Response, next: NextFunction) => {
	req.session = null;
	console.log("works");
	res.status(200).json({ user: null, message: "You have been logged out" });
};

export default logout;
