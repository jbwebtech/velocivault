import "dotenv/config";
import {Application}  from "express";
import express from "express";
import bodyParser from "body-parser";

import UserInitializer from "./infrastructure/user-initializer";

const identity: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3006;

identity.use(bodyParser.json());
UserInitializer.registerRoutes(identity);

identity.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
