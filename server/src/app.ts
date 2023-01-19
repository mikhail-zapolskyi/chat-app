import express from "express";
import cors from "cors";
import { corsOptions, dbConnection } from "./config";

const app = express();

app.use(cors(corsOptions));

dbConnection();

export default app;
