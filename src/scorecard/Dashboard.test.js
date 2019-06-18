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

    //BUTTON STRIKE AVAILABLE
    it("Button Strike available", () => {
      const { getByTitle } = render(<Dashboard />);
      expect(getByTitle(/buttonStrike/i)).not.toBeNull();
    });
  });

  //TESTING THE VALUE ON BUTTON CLICK
  it.todo("Current value of balls = 0 and strikes = 0");

  //CHECK THE VALUE TO INCREMENT FOR FIRST FOUR CLICKS OF BALL BUTTON
  // AFTER FOURTH CLICK IT SHOULD BE RESET TO 0
  describe("BUTTON-BALL:: CHECK ON CLICK", () => {
    it("Reset to 0 after 4 clicks", () => {
      const { getByTitle } = render(<Dashboard />);
      const buttonBall = getByTitle(/buttonBall/i);
      const inputBall = getByTitle(/inputBalls/);
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

  //CHECK THE VALUE OF BUTTON CLICK FOUL. WHEN FOUL IS PRESSED
  // IF 0 STRIKES - INCREMENT TO 1 STRIKE
  // IF 1 STRIKE - INCREMENT BY 1
  // IF 2 STRIKES - DO NOTHING
  // IF 3 STRIKES - RESET TO 0
  // STRIKES AND FOULD BEHAVE THE SAME WAY
  describe("BUTTON-FOUL:: CHECK ON CLICK", () => {
    it("Reset to 0 after it reaches 3. Do not increment after it reaches 2", () => {
      const { getByTitle } = render(<Dashboard />);
      const buttonFoul = getByTitle(/buttonFoul/i);
      const inputStrikes = getByTitle(/inputStrikes/);
      fireEvent.click(buttonFoul);
      expect(parseInt(inputStrikes.value)).toBe(1);
      fireEvent.click(buttonFoul);
      expect(parseInt(inputStrikes.value)).toBe(2);
      fireEvent.click(buttonFoul);
      expect(parseInt(inputStrikes.value)).toBe(2);
      fireEvent.click(buttonFoul);
      expect(parseInt(inputStrikes.value)).toBe(2);
    });
  });

  describe("BUTTON-STRIKE:: CHECK ON CLICK", () => {
    it("Reset to 0 after it reaches 3. Do not increment after it reaches 2", () => {
      const { getByTitle } = render(<Dashboard />);
      const buttonStrike = getByTitle(/buttonStrike/i);
      const inputStrikes = getByTitle(/inputStrikes/);
      fireEvent.click(buttonStrike);
      expect(parseInt(inputStrikes.value)).toBe(1);
      fireEvent.click(buttonStrike);
      expect(parseInt(inputStrikes.value)).toBe(2);
      fireEvent.click(buttonStrike);
      expect(parseInt(inputStrikes.value)).toBe(2);
      fireEvent.click(buttonStrike);
      expect(parseInt(inputStrikes.value)).toBe(2);
    });
  });

  //CHECK THE VALUE OF BUTTON CLICK HIT. WHEN HIT IS PRESSED BOTH
  // BALLS AND STRIKES MUST DISPLAY 0
  describe("BUTTON-HIT:: CHECK ON CLICK", () => {
    it("On click always reset to strikes and balls value to 0", () => {
      const { getByTitle } = render(<Dashboard />);
      const buttonHit = getByTitle(/buttonHit/i);
      const buttonFoul = getByTitle(/buttonFoul/i);
      const buttonBall = getByTitle(/buttonBall/i);
      const inputBalls = getByTitle(/inputBalls/);
      const inputStrikes = getByTitle(/inputStrikes/);
      fireEvent.click(buttonFoul);
      expect(parseInt(inputStrikes.value)).toBe(1);
      fireEvent.click(buttonBall);
      expect(parseInt(inputBalls.value)).toBe(1);
      fireEvent.click(buttonHit);
      expect(parseInt(inputBalls.value)).toBe(0);
      expect(parseInt(inputStrikes.value)).toBe(0);
    });
  });
});
