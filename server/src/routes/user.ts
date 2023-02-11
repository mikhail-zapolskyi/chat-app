import { Router } from "express";
import { verify_user } from "../middleware";
import { add_contact } from "../controlers";

const router: Router = Router();

router.patch("/api/add-contact", verify_user, add_contact);

export default router;
