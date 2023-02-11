import { Router } from "express";
import auth from "./auth";
import chat from "./chat";
import contacts from "./contacts";
import user from "./user";

const router = Router();

router.use(auth);
router.use(chat);
router.use(contacts);
router.use(user);

export default router;
