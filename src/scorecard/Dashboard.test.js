import React from "react";
import Dashboard from "./Dashboard.js";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("Dashboard", () => {
  it("Render the display dashboard without error", () => {
    render(<Dashboard />);
  });
  describe("Display Buttons", () => {
    it.todo("Dashboard must have 4 buttons - Strike, Ball, Foul, Hit");
    it("Button Strike available", () => {
      const { getAllByText } = render(<Dashboard />);
      expect(getAllByText(/Strike/i)).not.toBeNull();
    });
    it("Button Ball available", () => {
      const { getAllByText } = render(<Dashboard />);
      expect(getAllByText(/Ball/i)).not.toBeNull();
    });
    it("Button Foul available", () => {
      const { getByText } = render(<Dashboard />);
      expect(getByText(/Foul/i)).not.toBeNull();
    });
    it("Button Hit available", () => {
      const { getByText } = render(<Dashboard />);
      expect(getByText(/Hit/i)).not.toBeNull();
    });
  });

  describe("Display text boxes", () => {
    const { getByText } = render(<Dashboard />);
  });
});
