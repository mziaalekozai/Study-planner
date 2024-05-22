import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { useStore } from "../data/store";

// Mock useStore
vi.mock("../data/store", () => ({
  useStore: vi.fn(),
}));

describe("Footer Component", () => {
  it("should display the correct text", () => {
    // Mock the state to return a string for todayName
    useStore.mockReturnValue({ todayName: "Måndag" });

    render(<Footer />);
    expect(screen.getByText("Idag är det: Måndag")).toBeInTheDocument();
    expect(screen.getByText("Studieguide | 2024")).toBeInTheDocument();
  });
});
