const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (_request, response) => response.send("Hello, assety world!"));
app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}/`));
