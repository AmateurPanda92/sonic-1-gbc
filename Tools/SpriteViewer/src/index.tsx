import App from "App";
import ReactDOM from "react-dom/client";

import { StrictMode } from "react";

import "index.scss";

const rootElementId = "root";
const rootElement = document.getElementById(rootElementId);

if (rootElement === null) throw new Error(`The document doesn't contain an element with an ID of "${rootElementId}"`);

ReactDOM
    .createRoot(rootElement)
    .render(
        <StrictMode>
            <App />
        </StrictMode>
    );
