import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  it("should display the correct title", () => {
    render(<Header />);
    expect(screen.getByText("Min vecka")).toBeInTheDocument();
  });

  it("should display a restart button", () => {
    render(<Header />);
    expect(screen.getByText("Starta om vecka")).toBeInTheDocument();
  });
});
