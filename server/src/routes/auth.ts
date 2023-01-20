import { Router } from "express";
import { Response, Request, NextFunction } from "express";

const router = Router();

router.post("/register", (req: Request, res: Response, next: NextFunction) => {
	res.send("Register");
});

router.post("/login/:id", (req: Request, res: Response, next: NextFunction) => {
	res.send("Login");
});

router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
	res.send("Logout");
});

export default router;
