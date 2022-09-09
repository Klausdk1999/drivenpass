import { Router } from "express";
import verifyToken from "../middlewares/validateToken.js";
import * as cardController from "../controllers/cardsController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import cardSchema from "../schemas/cardSchema.js";

const cardsRouter = Router();

cardsRouter.get("/cards", verifyToken, cardController.getCardsFromUser);
cardsRouter.get("/cards/:id",	verifyToken,cardController.getCardById);
cardsRouter.post("/cards", verifyToken,validateSchema(cardSchema),cardController.createCard);
cardsRouter.delete("/cards/:id", verifyToken,cardController.deleteCard);

export default cardsRouter;