import * as React from "react";
import * as ReactDOM from "react-dom";
import { UseSignerProvider } from "../src";

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <UseSignerProvider providerOptions={{}} defaultChainId={1}>
        (body)
      </UseSignerProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
