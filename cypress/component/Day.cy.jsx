/* eslint-disable no-undef */

import Day from "../../src/components/day/Day";

describe("Day Component", () => {
  const items = [
    { id: 1, text: "Göra klart inlämning", done: false, late: false },
    { id: 2, text: "Lektion i skolan 9-16", done: true, late: false },
  ];

  it("should display the day name", () => {
    cy.mount(<Day dayName="Måndag" />);
    cy.get('[data-cy="show-dayname"]').should("be.visible");
  });

  it("should display the items", () => {
    cy.mount(<Day dayName="Måndag" items={items} />);
    items.forEach((item) => {
      cy.contains(item.text).should("be.visible");
    });
  });

  it("should have a button to add new task", () => {
    cy.mount(<Day />);
    cy.get('[data-cy="add-btn"]').should("be.visible");
  });
  it("should call handleChange when an item checkbox is clicked", () => {
    const handleChange = cy.stub().as("handleChange");
    const itemsWithHandler = items.map((item) => ({ ...item, handleChange }));

    cy.mount(
      <Day dayName="Måndag" items={itemsWithHandler} onChange={handleChange} />
    );
    cy.get('input[type="checkbox"]').first().click();
    cy.get("@handleChange").should("have.been.calledOnce");
  });
});
