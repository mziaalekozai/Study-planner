/* eslint-disable no-undef */

import Item from "../../src/components/day/Item";
import { mount } from "@cypress/react18";
import { useStore } from "../../src/data/store";

describe("Item Component", () => {
  const item = {
    id: 1,
    text: "Göra klart inlämning",
    done: false,
    late: false,
  };

  beforeEach(() => {
    mount(
      <Item
        item={item}
        handleChange={() => {}}
        handleRemove={() => useStore.getState().removeTodo(item.id)}
      />
    );
  });

  it("should display the item text", () => {
    cy.get('[data-cy="item-text"]').should("contain.text", item.text);
  });

  it("should display the item as done when checkbox is checked", () => {
    item.done = true;
    mount(
      <Item
        item={item}
        handleChange={() => {}}
        handleRemove={() => useStore.getState().removeTodo(item.id)}
      />
    );
    cy.get('input[type="checkbox"]').should("be.checked");
  });

  it("should call handleChange when checkbox is clicked", () => {
    const handleChange = cy.stub().as("handleChange");
    mount(
      <Item
        item={item}
        handleChange={handleChange}
        handleRemove={() => useStore.getState().removeTodo(item.id)}
      />
    );
    cy.get('input[type="checkbox"]').click();
    cy.get("@handleChange").should("have.been.calledOnce");
  });

  it("should remove an item when delete button is clicked", () => {
    const handleRemove = cy.stub().as("handleRemove");
    mount(
      <Item item={item} handleChange={() => {}} handleRemove={handleRemove} />
    );
    cy.get('[data-cy="remove-btn"]').click();
    cy.get("@handleRemove").should("have.been.calledOnce");
  });

  it("should edit an item text", () => {
    const newText = "Uppdaterad text";
    cy.get('[data-cy="edit-btn"]').click();
    cy.get('[data-cy="edit-input"]').clear().type(newText);
    cy.get('[data-cy="save-btn"]').click();
    cy.get('[data-cy="item-text"]').should("contain.text", newText);
  });
});

// /* eslint-disable no-undef */

// import { mount } from "@cypress/react18"; // Använd rätt paket för React 18
// import { useStore } from "../../src/data/store";
// import Item from "../../src/components/day/Item";

// describe("Item Component", () => {
//   const item = {
//     id: 1,
//     text: "Göra klart inlämning",
//     done: false,
//     late: false,
//   };

//   beforeEach(() => {
//     mount(
//       <Item
//         item={item}
//         handleChange={() => {}}
//         handleRemove={() => useStore.getState().removeTodo(item.id)}
//       />
//     );
//   });

//   it("should display the item text", () => {
//     cy.get('[data-cy="item-text"]').should("contain.text", item.text);
//   });

//   it("should display the item as done when checkbox is checked", () => {
//     item.done = true;
//     mount(
//       <Item
//         item={item}
//         handleChange={() => {}}
//         handleRemove={() => useStore.getState().removeTodo(item.id)}
//       />
//     );
//     cy.get('input[type="checkbox"]').should("be.checked");
//   });

//   it("should call handleChange when checkbox is clicked", () => {
//     const handleChange = cy.stub().as("handleChange");
//     mount(
//       <Item
//         item={item}
//         handleChange={handleChange}
//         handleRemove={() => useStore.getState().removeTodo(item.id)}
//       />
//     );
//     cy.get('input[type="checkbox"]').click();
//     cy.get("@handleChange").should("have.been.calledOnce");
//   });

//   it("should remove an item when delete button is clicked", () => {
//     const handleRemove = cy.stub().as("handleRemove");
//     mount(
//       <Item item={item} handleChange={() => {}} handleRemove={handleRemove} />
//     );
//     cy.get('[data-cy="remove-btn"]').click();
//     cy.get("@handleRemove").should("have.been.calledOnce");
//   });
// });
