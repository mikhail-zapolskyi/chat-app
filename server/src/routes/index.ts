import { Router } from "express";
import auth from "./auth";
import contacts from "./contacts";
import conversations from "./conversations";

const router = Router();

router.use(auth);
router.use(contacts);
router.use(conversations);

export default router;
