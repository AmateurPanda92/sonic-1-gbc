import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "fs/promises";

import "dotenv-defaults/config";

dotenv.config();

const app = express();

const port = process.env["PORT"];
const clientHost = process.env["CLIENT_HOST"];

app.use(cors({ origin: clientHost }));

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}/.`));

app.get("/graphics/sprites/sonic/idle", async (_request, response) => {
    const location = "../../Data/Assets/Graphics/Sprites/Sonic/Idle.json";
    const buffer = await fs.readFile(location);
    const json = buffer.toString();
    const parsed = JSON.parse(json);

    response.send(parsed);
});
