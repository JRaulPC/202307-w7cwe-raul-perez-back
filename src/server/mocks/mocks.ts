import mongoose from "mongoose";
import { type RobotStructure } from "../types";

export const robotsMocks: RobotStructure[] = [
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "R2-D2",
    speed: 4,
    endurance: 10,
  },
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "Emiliio",
    speed: 4,
    endurance: 10,
  },
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "Terminator",
    speed: 4,
    endurance: 8,
  },
];
