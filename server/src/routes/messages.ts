import { Router } from "express";
import { verify_user } from "../middleware";
import { getMessagesByRoomId } from "../controlers";

const router: Router = Router();

router.post("/api/messages", verify_user, getMessagesByRoomId);

export default router;
