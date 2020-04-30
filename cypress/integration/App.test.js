/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('App', () => {
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
  });

  context('switch location', () => {
    it('to Europe', () => {
      cy.get('[data-test-id="nav-button-europe"]').should(
        'have.class',
        'MuiButton-outlinedPrimary',
      );
      cy.get('[data-test-id="nav-button-europe"]').click();
      cy.get('[data-test-id="nav-button-europe"]').should(
        'have.class',
        'MuiButton-containedPrimary',
      );
    });

    it('to Worldwide', () => {
      cy.get('[data-test-id="nav-button-worldwide"]').should(
        'have.class',
        'MuiButton-outlinedPrimary',
      );
      cy.get('[data-test-id="nav-button-worldwide"]').click();
      cy.get('[data-test-id="nav-button-worldwide"]').should(
        'have.class',
        'MuiButton-containedPrimary',
      );
    });
  });
});
