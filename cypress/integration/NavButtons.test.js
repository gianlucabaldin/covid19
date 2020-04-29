/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Navbuttons', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('Italy button as active default', () => {
      cy.get('[data-test-id="nav-button-italy"]').should(
        'have.class',
        'MuiButton-containedPrimary',
      );
    });

    it('Europe button disabled', () => {
      cy.get('[data-test-id="nav-button-europe"]').should(
        'have.class',
        'MuiButton-outlinedPrimary',
      );
    });

    it('Country List button disabled', () => {
      cy.get('[data-test-id="nav-button-country-list"]').should(
        'have.class',
        'MuiButton-outlinedPrimary',
      );
    });

    it('Worldwide button disabled', () => {
      cy.get('[data-test-id="nav-button-worldwide"]').should(
        'have.class',
        'MuiButton-outlinedPrimary',
      );
    });
  });
});
