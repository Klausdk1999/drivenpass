import { Router } from "express";
import verifyToken from "../middlewares/validateToken.js";
import * as noteController from "../controllers/notesController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import secure_notesSchema from "../schemas/noteSchema.js";

const notesRouter = Router();

notesRouter.get("/notes", verifyToken, noteController.getSecure_notesFromUser);
notesRouter.get("/notes/:id",	verifyToken,noteController.getSecure_notesById);
notesRouter.post("/notes", verifyToken,validateSchema(secure_notesSchema),noteController.createSecure_notes);
notesRouter.delete("/notes/:id", verifyToken,noteController.deleteSecure_note);

export default notesRouter;