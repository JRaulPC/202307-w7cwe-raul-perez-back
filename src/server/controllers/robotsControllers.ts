import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../CustomError/CustomError.js";
import Robot from "../database/models/Robot.js";

export const getRobotsController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const robots = await Robot.find().exec();
    res.status(200).json({ robots });
  } catch (error: unknown) {
    const customError = new CustomError(
      "Internal server error",
      500,
      (error as Error).message,
    );

    next(customError);
  }
};
