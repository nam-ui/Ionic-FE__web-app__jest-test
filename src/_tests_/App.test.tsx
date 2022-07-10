import { render } from "@testing-library/react";
import App from "../App";

describe("App.tsx", () => {
  it("render function", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeDefined();
  });
});
