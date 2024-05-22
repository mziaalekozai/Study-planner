import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Day from "./Day";

describe("Day Component", () => {
  const items = [
    { id: 1, text: "Göra klart inlämning", done: false, late: false },
    { id: 2, text: "Lektion i skolan 9-16", done: true, late: false },
  ];

  it("should display the day name", () => {
    render(<Day dayName="Måndag" items={items} />);
    expect(screen.getByText("Måndag")).toBeInTheDocument();
  });

  it("should display the items", () => {
    render(<Day dayName="Måndag" items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });

  it("should have a button to add new task", () => {
    render(<Day dayName="Måndag" items={items} />);
    expect(screen.getByText("Ny uppgift")).toBeInTheDocument();
  });

  it("should call handleChange when an item checkbox is clicked", () => {
    const handleChange = vi.fn();
    render(<Day dayName="Måndag" items={items} onChange={handleChange} />);
    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

// import { describe, it, expect, vi } from "vitest";
// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Day from "./Day";

// describe("Day Component", () => {
//   const items = [
//     { id: 1, text: "Göra klart inlämning", done: false, late: false },
//     { id: 2, text: "Lektion i skolan 9-16", done: true, late: false },
//   ];

//   it("should display the day name", () => {
//     render(<Day dayName="Måndag" items={items} />);
//     expect(screen.getByText("Måndag")).toBeInTheDocument();
//   });

//   it("should display the items", () => {
//     render(<Day dayName="Måndag" items={items} />);
//     items.forEach((item) => {
//       expect(screen.getByText(item.text)).toBeInTheDocument();
//     });
//   });

//   it("should have a button to add new task", () => {
//     render(<Day dayName="Måndag" items={items} />);
//     expect(screen.getByText("Ny uppgift")).toBeInTheDocument();
//   });

//   it("should call handleChange when an item checkbox is clicked", () => {
//     const handleChange = vi.fn();
//     render(<Day dayName="Måndag" items={items} onChange={handleChange} />);
//     const checkbox = screen.getAllByRole("checkbox")[0];
//     fireEvent.click(checkbox);
//     expect(handleChange).toHaveBeenCalledTimes(1);
//   });
// });
