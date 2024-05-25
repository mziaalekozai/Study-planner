/* eslint-disable no-undef */
import Header from "../../src/components/Header";
import { useStore } from "../../src/data/store";
import Day from "../../src/components/day/Day";

describe("Header Component", () => {
  beforeEach(() => {
    useStore.setState({
      todos: [
        { id: 1, text: "Göra klart inlämning", done: false, late: false },
        { id: 2, text: "Lektion i skolan 9-16", done: true, late: false },
      ],
    });
    cy.mount(
      <>
        <Header />
        <Day dayName="Måndag" items={useStore.getState().todos} />
      </>
    );
  });

  it("should display the correct header text", () => {
    cy.get("h1").should("contain.text", "Min vecka");
  });

  it("should display the restart week button with correct text", () => {
    cy.get(".restart-week").contains("Starta om vecka").should("be.visible");
  });

  // it("should restart the week when the button is clicked", () => {
  //   cy.get('[data-cy="add-task-input"]')
  //     // .should("be.visible")
  //     .click();
  //   // .and("have.length", 2);

  //   // Simulate a change in the todos
  //   useStore.getState().toggleTodo(2);
  //   cy.get('[data-cy="add-task-input"]')
  //     .first()
  //     .find('input[type="checkbox"]')
  //     .should("be.checked");
  //   cy.get(".restart-week").contains("Starta om vecka").click();

  //   // Click the restart button
  //   cy.get(".restart-week").click();

  //   // Check if the todos are reset to their initial state
  //   cy.get('[data-cy="add-task-input"]').each((item) => {
  //     cy.wrap(item).find('input[type="checkbox"]').should("not.be.checked");
  //   });
  // });
});
