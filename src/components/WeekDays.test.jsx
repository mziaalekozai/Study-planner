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

  it("should display tasks for each day", () => {
    render(<WeekDays />);
    expect(screen.getByText("Göra klart inlämning")).toBeInTheDocument();
    expect(screen.getByText("Lektion i skolan 9-16")).toBeInTheDocument();
    expect(screen.getByText("Övning 1")).toBeInTheDocument();
    expect(screen.getByText("Repetera lektionen")).toBeInTheDocument();
    expect(screen.getByText("Övning 2")).toBeInTheDocument();
    expect(screen.getByText("Distanslektion 9-16")).toBeInTheDocument();
  });

  it("should have a button to add new task for each day", () => {
    render(<WeekDays />);
    expect(screen.getAllByText("Ny uppgift")).toHaveLength(7); // En för varje dag
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

// import { describe, it, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import WeekDays from "./WeekDays";

// describe("WeekDays Component", () => {
//   it("should display all days of the week", () => {
//     render(<WeekDays />);
//     const days = [
//       "Måndag",
//       "Tisdag",
//       "Onsdag",
//       "Torsdag",
//       "Fredag",
//       "Lördag",
//       "Söndag",
//     ];
//     days.forEach((day) => {
//       expect(screen.getByText(day)).toBeInTheDocument();
//     });
//   });

//   it("should have a button to add new task for each day", () => {
//     render(<WeekDays />);
//     const buttons = screen.getAllByText("Ny uppgift");
//     expect(buttons).toHaveLength(7); // En knapp för varje dag
//   });
//   it("should render Day components with correct props", () => {
//     render(<WeekDays />);
//     const days = [
//       "Måndag",
//       "Tisdag",
//       "Onsdag",
//       "Torsdag",
//       "Fredag",
//       "Lördag",
//       "Söndag",
//     ];
//     days.forEach((day) => {
//       expect(screen.getByText(day)).toBeInTheDocument();
//     });
//   });
// });
