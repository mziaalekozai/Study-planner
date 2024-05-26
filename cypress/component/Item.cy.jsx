/* eslint-disable no-undef */

import Item from "../../src/components/day/Item";
import { useStore } from "../../src/data/store";

describe("Item Component", () => {
  const item = {
    id: 1,
    text: "Göra klart inlämning",
    done: false,
    late: false,
  };

  beforeEach(() => {
    cy.mount(
      <Item
        item={{ id: 1, text: "Göra klart inlämning", done: false, late: false }}
        handleChange={() => useStore.getState().toggleTodo(1)}
        handleRemove={() => useStore.getState().removeTodo(1)}
        handleEdit={(newText) => useStore.getState().editTodo(1, newText)}
      />
    );
  });

  it("should display the item text", () => {
    // cy.get('[data-cy="item-text"]').should("contain.text", item.text);
    cy.get('[data-cy="item-text"]').contains(item.text);
  });

  it("should display the item as done when checkbox is checked", () => {
    item.done = true;
    cy.mount(<Item item={item} />);
    cy.get('input[type="checkbox"]').should("be.checked");
  });

  it("should call handleChange when checkbox is clicked", () => {
    const handleChange = cy.stub().as("handleChange");
    cy.mount(<Item item={item} handleChange={handleChange} />);
    cy.get('input[type="checkbox"]').click();
    cy.get("@handleChange").should("have.been.calledOnce");
  });

  it("should remove an item when delete button is clicked", () => {
    const handleRemove = cy.stub().as("handleRemove");
    cy.mount(<Item item={item} handleRemove={handleRemove} />);
    cy.get('[data-cy="remove-btn"]').click();
    cy.get("@handleRemove").should("have.been.calledOnce");
  });

  it("should edit an item text", () => {
    const handleEdit = cy.stub().as("handleEdit");
    cy.mount(<Item item={item} handleEdit={handleEdit} />);
    const newText = "Uppdaterad text";

    cy.get('[data-cy="edit-btn"]').click();
    cy.get('[data-cy="edit-input"]').clear().type(newText);
    cy.get('[data-cy="save-btn"]').click();
    cy.wait(500); // Lägg till en kort fördröjning
  });
});
