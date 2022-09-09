import { NextFunction, Request, Response } from "express";

export function errorHandlerMiddleware(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);

  return res.status(400).send(err);
}
