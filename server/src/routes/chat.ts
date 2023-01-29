import { Router } from "express";
import { verify_user } from "../middleware";
import { chat } from "../controlers";

const router: Router = Router();

router.post("/api/chat", verify_user, chat);

export default router;
