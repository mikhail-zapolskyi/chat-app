import { Router } from "express";
import { verify_user } from "../middleware";
import { getMessagesByRoomId, deleteMessageById } from "../controlers";

const router: Router = Router();

router.post("/rooms/:roomId/messages", verify_user, getMessagesByRoomId);
router.delete("/messages/:messageId", verify_user, deleteMessageById);

export default router;
