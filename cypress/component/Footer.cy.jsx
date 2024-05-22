/* eslint-disable no-undef */

import React from "react";
import { mount } from "cypress/react";
import Footer from "../../src/components/Footer";
import { useStore } from "../../src/data/store";

describe("Footer Component", () => {
  it("should display the correct text", () => {
    // Mock the store state
    useStore.setState({ todayName: "Måndag" });

    mount(<Footer />);
    cy.contains("Idag är det: Måndag").should("be.visible");
    cy.contains("Studieguide | 2024").should("be.visible");
  });
});
