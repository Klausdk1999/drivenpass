import { Router } from "express";
import verifyToken from "../middlewares/validateToken.js";
import * as wifiController from "../controllers/wifisController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import wifiSchema from "../schemas/wifiSchema.js";

const wifisRouter = Router();

wifisRouter.get("/wifis", verifyToken, wifiController.getWifisFromUser);
wifisRouter.get("/wifis/:id",	verifyToken,wifiController.getWifiById);
wifisRouter.post("/wifis", verifyToken,validateSchema(wifiSchema),wifiController.createWifi);
wifisRouter.delete("/wifis/:id", verifyToken,wifiController.deleteWifi);

export default wifisRouter;