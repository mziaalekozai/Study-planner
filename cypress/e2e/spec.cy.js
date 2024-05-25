/* eslint-disable no-undef */

describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show the navbar", () => {
    cy.get("header").should("be.visible");
  });

  it("should show the h1 with text and button with text on navbar", () => {
    cy.get("h1").contains("Min vecka").should("be.visible");
    cy.get("button").contains("Starta om vecka").should("be.visible");
  });
});

describe("Days of the week", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show the days", () => {
    const days = [
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
      "Söndag",
    ];
    days.forEach((day) => {
      cy.get("[data-cy=show-dayname]").contains(day).should("be.visible");
    });
  });

  it("should have a checkbox to check the todos", () => {
    cy.get("input[type='checkbox']").should("be.visible");
  });

  it("should have a button to add new task and the button should have text", () => {
    cy.get("button").contains("Ny uppgift").should("be.visible");
  });

  it("should display input and save button when 'Ny uppgift' is clicked", () => {
    cy.get("button").contains("Ny uppgift").click();
    cy.get("[data-cy='add-task-input']").should("be.visible");
    cy.get("[data-cy='save-task-btn']").should("be.visible");
  });
  it("should have an edit button", () => {
    cy.get("[data-cy='edit-btn']").should("be.visible");
  });
  it("should display input and save button when '✍️' is clicked", () => {
    cy.get("[data-cy='edit-btn']").contains("✍️").click();
    cy.get("[data-cy='edit-input']").should("be.visible");
    cy.get("[data-cy='save-btn']").should("be.visible");
  });
  it("should have a 🗑️ delete button", () => {
    cy.get("[data-cy='remove-btn']").contains("🗑️").should("be.visible");
  });
});

describe("Search ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have a title on the search element", () => {
    cy.get('[data-cy="search-title"]')
      .contains("Vad ska jag göra nu?")
      .should("be.visible");
  });
  it("should have an input field on the search element", () => {
    cy.get('[data-cy="search-input"]')
      // .contains("Vad ska jag göra nu?")
      .should("be.visible");
  });
});
describe("Footer ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have a p tag with text", () => {
    cy.get("p").contains("Idag är det: ").should("be.visible");
  });
});
