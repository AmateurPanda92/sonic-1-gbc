import dotenv from "dotenv";
import express from "express";

const defaultPort = 3001;

dotenv.config();

const app = express();
const port = process.env["PORT"] ?? defaultPort;

app.get("/", (_request, response) => response.send("Hello, assety world!"));
app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}/`));
