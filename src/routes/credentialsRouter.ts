import { Router } from "express";
import verifyToken from "../middlewares/validateToken.js";
import * as credentialController from "../controllers/credentialsController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import credentialSchema from "../schemas/credentialSchema.js";

const credentialsRouter = Router();

credentialsRouter.get("/credentials", verifyToken, credentialController.getCredentialsFromUser);
credentialsRouter.get("/credentials/:id",	verifyToken,credentialController.getCredentialById);
credentialsRouter.post("/credentials", verifyToken,validateSchema(credentialSchema),credentialController.createCredential);
credentialsRouter.delete("/credentials/:id", verifyToken,credentialController.deleteCredential);

export default credentialsRouter;