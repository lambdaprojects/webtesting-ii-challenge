import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  //Default test provided by create-react-app
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Test render to check if app is rendering successfully
  it("Renders the header successfully", () => {
    const { getByText } = render(<App />);
    getByText(/Baseball score card/i);
  });
});
