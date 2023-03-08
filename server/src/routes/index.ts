import { Router } from "express";
import auth from "./auth";
import contacts from "./contacts";
import user from "./user";
import conversations from "./conversations";

const router = Router();

router.use(auth);
router.use(contacts);
router.use(user);
router.use(conversations);

export default router;
