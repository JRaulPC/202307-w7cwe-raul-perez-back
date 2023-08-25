import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { endpointNotFound, generalErrorHandler } from "../middlewares/error.js";
import { robotsRoutes } from "./robotsRouters/robotsRouters.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRoutes);

app.use(endpointNotFound);
app.use(generalErrorHandler);

export default app;
