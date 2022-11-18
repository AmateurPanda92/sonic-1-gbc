import App from "App";
import { render, screen } from "@testing-library/react";

test("Contains page title", () => {
    render(<App />);
    const elementContainingPageTitle = screen.getByText("AmateurPanda92 Sprite Viewer");
    expect(elementContainingPageTitle).toBeInTheDocument();
});
