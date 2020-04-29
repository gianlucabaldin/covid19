/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('ItalyContainer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('the summary', () => {
      cy.get('[data-test-id="italy-container-summary"]').should('be.visible');
    });
    it('a switch', () => {
      cy.get('[data-test-id="switch-interval-container"]').should('be.visible');
    });
    it('italy charts', () => {
      cy.get('[data-test-id="italy-chart-container"]').should('be.visible');
    });
    it('regions table', () => {
      cy.get('[data-test-id="italy-container-regions"]').should('be.visible');
    });
  });
});
