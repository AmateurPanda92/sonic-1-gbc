interface GameDataSchema {
    name: "ap92-game-data-schema";
    version: "0.2.0";
}

interface GameDataType {
    primary: "Graphics";
    secondary: "Two-dimentional";
    tertiary: "Tile-based";
}

interface GameDataMetadata {
    object: string;
    type: "Sprite";
    state: string;
    revision: string;
}

type CssColour = string;
type Colour = CssColour;
type ColourIndex = number;
type Palette = ColourIndex[];
type PaletteIndex = number;
type PaletteColourIndex = number;
type PixelMatrix = PaletteColourIndex[][];

interface Tile {
    palette: PaletteIndex;
    pixels: PixelMatrix;
}

interface GameDataPayload {
    isAnimated: boolean;
    colours: Colour[];
    palettes: Palette[];
    tiles: Tile[];
}

export default interface GameData {
    schema: GameDataSchema;
    type: GameDataType;
    metadata: GameDataMetadata;
    payload: GameDataPayload;
}
