/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Summary', () => {
  before(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('a container', () => {
      cy.get('[data-test-id$="-container-summary"]').should('be.visible');
    });
  });

  context('should show summary values', () => {
    // with env var mock = true
    // Italy container as page load default
    context('Italy', () => {
      it('total swabs: 1.757.659', () => {
        cy.get('[data-test-id="summary-total-swabs"]').should(
          'have.text',
          '1.757.659',
        );
      });
      it('total cases: 197.675', () => {
        cy.get('[data-test-id="summary-total-cases"]').should(
          'have.text',
          '197.675',
        );
      });
      it('total deceased: 26.644', () => {
        cy.get('[data-test-id="summary-total-deceased"]').should(
          'have.text',
          '26.644',
        );
      });
    });
  });
});
