// /* eslint-disable no-undef */
// import PrioList from "../../src/components/prio-list/PrioList";
// import { useStore } from "../../src/data/store";

// describe("PrioList Component", () => {
//   beforeEach(() => {
//     useStore.setState({
//       todos: [
//         { id: 1, text: "Göra klart inlämning", done: false, late: false },
//         { id: 2, text: "Lektion i skolan 9-16", done: true, late: false },
//         { id: 3, text: "Skriva rapport", done: false, late: true },
//       ],
//     });
//     cy.mount(<PrioList />);
//   });

//   it("should display the search input", () => {
//     cy.get('[data-cy="search-input"]').should("be.visible");
//   });

//   // it("should filter todo items based on search text", () => {
//   //   const searchText = "inlämning";
//   //   cy.get('[data-cy="search-input"]').type(searchText);
//   //   cy.get('[data-cy="todo-item"]').should("have.length.greaterThan", 0);
//   //   cy.get('[data-cy="todo-item"]').first().should("contain.text", searchText);

//   //   cy.get('[data-cy="search-input"]').clear().type("skolan");
//   //   cy.get('[data-cy="todo-item"]').should("have.length", 1);
//   //   cy.get('[data-cy="todo-item"]')
//   //     .first()
//   //     .should("contain.text", "Lektion i skolan 9-16");

//   //   cy.get('[data-cy="search-input"]').clear().type("rapport");
//   //   cy.get('[data-cy="todo-item"]').should("have.length", 1);
//   //   cy.get('[data-cy="todo-item"]')
//   //     .first()
//   //     .should("contain.text", "Skriva rapport");

//   //   cy.get('[data-cy="search-input"]').clear().type("uppgift som inte finns");
//   //   cy.get('[data-cy="no-todo"]').should("be.visible");
//   // });

//   // it("should filter todo items based on search text", () => {
//   //   const searchText = "inlämning";
//   //   cy.get('[data-cy="search-input"]').type(searchText);
//   //   cy.get('[data-cy="todo-item"]').should("have.length", length > 1);
//   //   cy.get('[data-cy="todo-item"]').first().should("contain.text", searchText);

//   //   cy.get('[data-cy="search-input"]').clear().type("skolan");
//   //   cy.get('[data-cy="todo-item"]').should("have.length", 1);
//   //   cy.get('[data-cy="todo-item"]')
//   //     .first()
//   //     .should("contain.text", "Lektion i skolan 9-16");

//   //   cy.get('[data-cy="search-input"]').clear().type("rapport");
//   //   cy.get('[data-cy="todo-item"]').should("have.length", 1);
//   //   cy.get('[data-cy="todo-item"]')
//   //     .first()
//   //     .should("contain.text", "Skriva rapport");

//   //   cy.get('[data-cy="search-input"]').clear().type("uppgift som inte finns");
//   //   cy.get('[data-cy="no-todo"]').should("be.visible");
//   // });
// });

/* eslint-disable no-undef */

import PrioList from "../../src/components/prio-list/PrioList";
import { useStore } from "../../src/data/store";

describe("PrioList Component", () => {
  beforeEach(() => {
    useStore.setState({
      todos: [
        { id: 1, text: "Göra klart inlämning", done: false, late: false },
        { id: 2, text: "Lektion i skolan 9-16", done: true, late: false },
        { id: 3, text: "Skriva rapport", done: false, late: true },
      ],
    });
    cy.mount(<PrioList />);
  });

  it("should display the search input", () => {
    cy.get('[data-cy="search-input"]').should("be.visible");
  });

  it("should filter todo items based on search text", () => {
    const searchText = "inlämning";
    cy.get('[data-cy="search-input"]').type(searchText);
    cy.get('[data-cy="todo-item"]').should("have.length", length > 0);
    cy.get('[data-cy="todo-item"]').first().should("contain.text", searchText);

    cy.get('[data-cy="search-input"]').clear().type("skolan");
    cy.get('[data-cy="todo-item"]').should("have.length", 1);
    cy.get('[data-cy="todo-item"]')
      .first()
      .should("contain.text", "Lektion i skolan 9-16");

    cy.get('[data-cy="search-input"]').clear().type("rapport");
    cy.get('[data-cy="todo-item"]').should("have.length", 1);
    cy.get('[data-cy="todo-item"]')
      .first()
      .should("contain.text", "Skriva rapport");

    cy.get('[data-cy="search-input"]').clear().type("uppgift som inte finns");
    cy.get('[data-cy="no-todo"]').should("be.visible");
  });
});
