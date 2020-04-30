/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Summary', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('a container', () => {
      cy.get('[data-test-id="italy-container-summary"]').should('be.visible');
    });
  });
  context('should show', () => {
    it('total swabs: 1757659', () => {
      cy.get('[data-test-id="summary-total-swabs"]').should(
        'have.text',
        '1757659',
      );
    });
    it('total cases: 197675', () => {
      cy.get('[data-test-id="summary-total-cases"]').should(
        'have.text',
        '197675',
      );
    });
    it('total deceased: 26644', () => {
      cy.get('[data-test-id="summary-total-deceased"]').should(
        'have.text',
        '26644',
      );
    });
  });
});
