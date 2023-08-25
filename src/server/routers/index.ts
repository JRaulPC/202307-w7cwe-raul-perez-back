import express from "express";
import morgan from "morgan";
import { robotsRoutes } from "./robotsRouters/robotsRouters.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRoutes);

export default app;
