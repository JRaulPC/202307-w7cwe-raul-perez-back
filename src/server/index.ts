import debugCreator from "debug";
import connectToDatabase from "./database/connectToDatabase.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;
const mongoRobotsUrl = process.env.MONGODB_URL;

const debug = debugCreator("things:server:");

try {
  await connectToDatabase(mongoRobotsUrl!);
  startServer(+port);
} catch (error: unknown) {
  debug("Unable to connect to database");
  debug((error as Error).message);
  process.exit(1);
}
