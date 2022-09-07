import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import memeRouter from "./routes/memeRouter.js";

const app = express();
app.use(json());
app.use(cors());
app.use(memeRouter);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
