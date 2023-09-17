// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("setResolution", (width, height) => {
  cy.viewport(width, height);
});

Cypress.Commands.add(
  "shouldBeInViewport",
  { prevSubject: "element" },
  (subject) => {
    cy.wrap(subject).should(($el) => {
      const rect = $el[0].getBoundingClientRect();
      expect(rect.top).to.be.at.least(0);
      expect(rect.bottom).to.be.at.most(Cypress.config("viewportHeight"));
    });
  }
);