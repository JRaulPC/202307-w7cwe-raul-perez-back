import { type Request, type Response } from "express";
import Robot from "../database/models/Robot.js";

export const getRobotsController = async (_req: Request, res: Response) => {
  const robots = await Robot.find().exec();

  res.status(200).json({ robots });
};
