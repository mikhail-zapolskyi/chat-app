import { Router } from "express";
import { Response, Request, NextFunction } from "express";
import { register } from "../controlers/auth";

const router = Router();

router.post("/register", register);

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
	res.send("Login");
});

router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
	res.send("Logout");
});

export default router;
