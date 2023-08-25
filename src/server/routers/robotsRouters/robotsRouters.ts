import express from "express";
import { getRobotsController } from "../../controllers/robotsControllers.js";

export const robotsRoutes = express.Router();

robotsRoutes.get("/", getRobotsController);

export default robotsRoutes;
