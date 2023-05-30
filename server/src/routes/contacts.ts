import { Router } from "express";
import { verify_user } from "../middleware";
import { addContact, getContacts, remove } from "../controlers";

const router: Router = Router();

router.post("/contacts/contact-list", verify_user, getContacts);
router.patch("/contacts/add", verify_user, addContact, getContacts);
router.delete("/contacts/remove", verify_user, remove);

export default router;
