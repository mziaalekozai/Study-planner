import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeekDays from "./WeekDays";

describe("WeekDays Component", () => {
  it("should display all days of the week", () => {
    render(<WeekDays />);
    const days = [
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
      "Söndag",
    ];
    days.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  it("should have a button to add new task for each day", () => {
    render(<WeekDays />);
    const buttons = screen.getAllByText("Ny uppgift");
    expect(buttons).toHaveLength(7); // En knapp för varje dag
  });
  it("should render Day components with correct props", () => {
    render(<WeekDays />);
    const days = [
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
      "Söndag",
    ];
    days.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });
});
