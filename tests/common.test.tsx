import { render } from "@testing-library/react";

import "jest-canvas-mock";

// import { RichContent } from "../src";

describe("Common render", () => {
  it("renders without crashing", () => {
    //@ts-ignore
    render(<div />);
  });
});
