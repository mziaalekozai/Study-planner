/* eslint-disable no-undef */

import React from "react";
import { mount } from "cypress/react";
import Day from "../../src/components/day/Day";
import Item from "../../src/components/day/Item";

describe("Day Component", () => {
  const items = [
    { id: 1, text: "Göra klart inlämning", done: false, late: false },
    { id: 2, text: "Lektion i skolan 9-16", done: true, late: false },
  ];

  it("should display the day name", () => {
    mount(<Day dayName="Måndag" items={items} />);
    cy.contains("Måndag").should("be.visible");
  });

  it("should display the items", () => {
    mount(<Day dayName="Måndag" items={items} />);
    items.forEach((item) => {
      cy.contains(item.text).should("be.visible");
    });
  });

  it("should have a button to add new task", () => {
    mount(<Day dayName="Måndag" items={items} />);
    cy.contains("Ny uppgift").should("be.visible");
  });

  it("should call handleChange when an item checkbox is clicked", () => {
    const handleChange = cy.stub().as("handleChange");
    const itemsWithHandler = items.map((item) => ({ ...item, handleChange }));

    mount(<Day dayName="Måndag" items={itemsWithHandler} />);
    cy.get('input[type="checkbox"]').first().click();
    cy.get("@handleChange").should("have.been.calledOnce");
  });
});
