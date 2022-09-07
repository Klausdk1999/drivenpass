import { Router } from "express";
import * as memeController from "../controllers/memeController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const memeRouter = Router();
memeRouter.get("/memes", memeController.get);
memeRouter.post("/memes", validateSchemaMiddleware, memeController.create);

export default memeRouter;
