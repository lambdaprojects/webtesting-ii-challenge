import React from "react";
import Display from "./Display.js";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import { exportAllDeclaration } from "@babel/types";

/*
 * Testing the display of the scores
 */
describe("Display", () => {
  it("Render the display of display without error", () => {
    render(<Display />);
  });

  //Two text boxes must be available to show the scores
  it.todo("There will be two text boxes - Balls, Strikes");
  describe("Display text boxes", () => {
    // Check if the textbox named balls exist
    it("Display the text boxes - balls", () => {
      const { getByTitle } = render(<Display />);
      expect(getByTitle(/inputBalls/i)).not.toBeNull();
    });

    // Check if the text box named strikes exist
    it("Display the text boxes - strikes", () => {
      const { getByTitle } = render(<Display />);
      expect(getByTitle(/inputStrikes/i)).not.toBeNull();
    });
  });
});
