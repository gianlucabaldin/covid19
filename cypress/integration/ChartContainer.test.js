/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Chart Container', () => {
  before(() => {
    cy.visit('/');
  });

  describe('should show', () => {
    it('the chart', () => {
      cy.get('[data-test-id$="-chart-container"]').should('be.visible');
    });

    it('the switch', () => {
      cy.get('[data-test-id="switch-interval-container"]').should('be.visible');
    });

    it('the data provider', () => {
      cy.get('[data-test-id="data-provided"]').should('be.visible');
    });
  });
});
