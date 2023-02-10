import { Router } from "express";
import auth from "./auth";
import chat from "./chat";
import contacts from "./contacts";

const router = Router();

router.use(auth);
router.use(chat);
router.use(contacts);

export default router;
