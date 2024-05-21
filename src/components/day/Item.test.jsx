import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "./Item";

describe("Item Component", () => {
  const item = {
    id: 1,
    text: "Göra klart inlämning",
    done: false,
    late: false,
  };

  it("should display the item text", () => {
    render(<Item item={item} handleChange={() => {}} />);
    expect(screen.getByText(item.text)).toBeInTheDocument();
  });

  it("should display the item as done when checkbox is checked", () => {
    item.done = true;
    render(<Item item={item} handleChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should call handleChange when checkbox is clicked", () => {
    const handleChange = vi.fn();
    render(<Item item={item} handleChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
