/* eslint-disable no-undef */

import { mount } from "cypress/react";
import WeekDays from "../../src/components/WeekDays";
import { useStore } from "../../src/data/store";

describe("WeekDays Component", () => {
  const todos = [
    { id: 1, day: "må", done: true, late: false, text: "Göra klart inlämning" },
    {
      id: 2,
      day: "ti",
      done: true,
      late: false,
      text: "Lektion i skolan 9-16",
    },
    { id: 3, day: "ti", done: false, late: true, text: "Övning 1" },
    { id: 4, day: "on", done: false, late: false, text: "Repetera lektionen" },
    { id: 5, day: "on", done: true, late: false, text: "Övning 2" },
    { id: 6, day: "to", done: false, late: false, text: "Distanslektion 9-16" },
  ];

  it("should display all days of the week", () => {
    useStore.setState({ todos });
    mount(<WeekDays />);
    const daysOfWeek = [
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
      "Söndag",
    ];
    daysOfWeek.forEach((day) => {
      cy.contains(day).should("be.visible");
    });
  });

  it("should display tasks for each day", () => {
    useStore.setState({ todos });
    mount(<WeekDays />);
    todos.forEach((todo) => {
      cy.contains(todo.text).should("be.visible");
    });
  });

  it("should have a button to add new task for each day", () => {
    useStore.setState({ todos });
    mount(<WeekDays />);
    cy.get("button").contains("Ny uppgift").should("have.length", 1);
  });

  it("should render Day components with correct props", () => {
    useStore.setState({ todos });
    mount(<WeekDays />);
    todos.forEach((todo) => {
      cy.contains(todo.text).should("be.visible");
    });
  });
});
