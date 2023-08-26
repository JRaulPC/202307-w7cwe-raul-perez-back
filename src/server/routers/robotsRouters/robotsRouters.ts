import cors from "cors";
import express from "express";
import { getRobotsController } from "../../controllers/robotsControllers.js";

export const robotsRoutes = express.Router();

const corsGetOptions = {
  origin: true,
  methods: "GET",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

robotsRoutes.get("/", cors(corsGetOptions), getRobotsController);

export default robotsRoutes;
