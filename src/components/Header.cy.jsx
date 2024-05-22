/* eslint-disable no-undef */

// import { mount } from "@cypress/react18";
import Header from "./Header";
import { useStore } from "../data/store";
import Day from "./day/Day";

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

  it("should restart the week", () => {
    cy.get('[data-cy="show-item"]').should("have.length", 2);
    useStore.getState().toggleTodo(1);
    cy.get('[data-cy="show-item"]')
      .first()
      .find('input[type="checkbox"]')
      .should("be.checked");

    cy.get(".restart-week").click();
    cy.get('[data-cy="show-item"]')
      .first()
      .find('input[type="checkbox"]')
      .should("not.be.checked");
  });
});
