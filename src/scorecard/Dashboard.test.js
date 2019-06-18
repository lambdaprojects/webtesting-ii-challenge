import React from "react";
import Dashboard from "./Dashboard.js";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

/*
 * Testing the functionalities in dashboard
 */
describe("Dashboard", () => {
  it("Render the display dashboard without error", () => {
    render(<Dashboard />);
  });

  /*
   * Checking if the display buttons are available
   */
  describe("Display Buttons", () => {
    it.todo("Dashboard must have 4 buttons - Strike, Ball, Foul, Hit");

    //BUTTON FOUL AVAILABLE
    it("Button Foul available", () => {
      const { getByTitle } = render(<Dashboard />);
      expect(getByTitle(/buttonFoul/i)).not.toBeNull();
    });

    //BUTTON BALLS AVAILABLE
    it("Button Balls available", () => {
      const { getByTitle } = render(<Dashboard />);
      expect(getByTitle(/buttonBall/)).not.toBeNull();
    });

    //BUTTON HIT AVAILABLE
    it("Button Hit available", () => {
      const { getByTitle } = render(<Dashboard />);
      expect(getByTitle(/buttonHit/i)).not.toBeNull();
    });
  });

  //TESTING THE VALUE ON BUTTON CLICK
  it.todo("Current value of balls = 0 and strikes = 0");

  describe("BUTTON-BALL:: CHECK ON CLICK", () => {
    it("Reset to 0 after 4 clicks", () => {
      const { getByTitle } = render(<Dashboard />);
      const buttonBall = getByTitle(/buttonBall/i);
      const inputBall = getByTitle(/inputBall/);
      fireEvent.click(buttonBall);
      expect(parseInt(inputBall.value)).toBe(1);
      fireEvent.click(buttonBall);
      expect(parseInt(inputBall.value)).toBe(2);
      fireEvent.click(buttonBall);
      expect(parseInt(inputBall.value)).toBe(3);
      fireEvent.click(buttonBall);
      expect(parseInt(inputBall.value)).toBe(4);
      fireEvent.click(buttonBall);
      expect(parseInt(inputBall.value)).toBe(0);
    });
  });
});
