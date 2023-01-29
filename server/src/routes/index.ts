import { Router } from "express";
import auth from "./auth";
import chat from "./chat";

const router = Router();

router.use(auth);
router.use(chat);

export default router;
