/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('WorldwideContainer', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test-id="nav-button-worldwide"]').click();
  });

  context('should have', () => {
    it('the summary', () => {
      cy.get('[data-test-id="worldwide-container-summary"]').should(
        'be.visible',
      );
    });
  });

  context('fetches', () => {
    it('summary data', () => {
      cy.get('[data-test-id="switch-interval-container"]').should(
        'contain.text',
        '0',
      );
      // it('italy charts', () => {
      //   cy.get('[data-test-id="italy-container-chart-box"]').should('be.visible');
      // });
      // it('regions table', () => {
      //   cy.get('[data-test-id="italy-container-regions"]').should('be.visible');
      // });
    });
  });
});
