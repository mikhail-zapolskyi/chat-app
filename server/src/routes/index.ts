import { Router } from "express";
import auth from "./auth";
import contacts from "./contacts";
import messages from "./messages";

const router = Router();

router.use(auth);
router.use(contacts);
router.use(messages);

export default router;
