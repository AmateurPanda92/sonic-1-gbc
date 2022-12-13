import Heading from "Components/Heading";
import Paragraph from "Components/Paragraph";

import { useCallback, useEffect, useState } from "react";

const assetServerHost = process.env["REACT_APP_ASSET_SERVER_HOST"];
const idleSonicSpritePath = "/graphics/sprites/sonic/idle";

const App = () => {
    const [json, setJson] = useState<string>();

    const fetchJson = useCallback(async () => {
        const response = await fetch(`${assetServerHost}${idleSonicSpritePath}`);
        const json = await response.json();
        const serialised = JSON.stringify(json);

        setJson(serialised);
    }, []);

    useEffect(() => { fetchJson(); }, [fetchJson]);

    return (
        <>
            <Heading level={1} emoji="🔎" copy="AmateurPanda92 Sprite Viewer" />
            <Paragraph copy="Hello, spritey world!" />
            <code>{json}</code>
        </>
    );
};

export default App;
