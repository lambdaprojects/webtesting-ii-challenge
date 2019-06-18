import React from "react";
import Display from "./Display.js";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import { exportAllDeclaration } from "@babel/types";

describe("Display", () => {
  it("Render the display of display without error", () => {
    render(<Display />);
  });
  it.todo("There will be two text boxes - Balls, Strikes");
  describe("Display text boxes", () => {
    it("Display the text boxes - balls & strikes", () => {
      const { getByText } = render(<Display />);
      expect(getByText(/balls/i)).not.toBeNull();
      expect(getByText(/strikes/i)).not.toBeNull();
    });
  });
});
