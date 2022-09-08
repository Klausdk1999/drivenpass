import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import authSchema from "../schemas/authSchema.js";
import { signin, signup } from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/signin", validateSchema(authSchema), signin);
authRoute.post("/signup", validateSchema(authSchema), signup);

export default authRoute;