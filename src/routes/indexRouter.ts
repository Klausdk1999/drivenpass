import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialsRouter from "./credentialsRouter.js";
import notesRouter from "./notesRouter.js"
import wifisRouter from "./wifisRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(wifisRouter);
router.use(notesRouter);

export default router;