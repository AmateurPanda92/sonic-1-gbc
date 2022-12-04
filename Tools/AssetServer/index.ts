import dotenv from "dotenv";
import express from "express";
import fs from "fs/promises";

const defaultPort = 3001;

dotenv.config();

const app = express();
const port = process.env["PORT"] ?? defaultPort;

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}/.`));

/* TODO:
 * - [ ] Read the relative location of the assets directory from config.
 * - [ ] Introduce a default config values file.
 * - [ ] Create a filesystem access shim around fs package calls.
 * - [ ] Change the functionality to be reusable and dynamic, instead of hardcoded for specific assets.
 * - [ ] Create a TS data model that can be leveraged to validate assets against the schema.
 * - [ ] Ensure the data is sent back with the correct MIME type.
 * - [ ] Change to be a general "data" server, instead of just assets (i.e. rename the app).
 */
app.get("/graphics/sprites/sonic/idle", async (_request, response) => {
    const location = "../../Data/Assets/Graphics/Sprites/Sonic/Idle.json";
    const buffer = await fs.readFile(location);
    const json = buffer.toString();
    const parsed = JSON.parse(json);

    response.send(parsed);
});
