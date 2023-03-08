import { Router } from "express";
import { verify_user } from "../middleware";
import { getConversationByRoomId } from "../controlers";

const router: Router = Router();

router.post("/api/conversations", verify_user, getConversationByRoomId);

export default router;
