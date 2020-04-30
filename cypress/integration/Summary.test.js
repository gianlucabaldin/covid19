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

  context('should show summary values', () => {
    // with env var mock = true
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

    context('Worldwide', () => {
      // with env var mock = true
      beforeEach(() => {
        cy.get('[data-test-id="nav-button-worldwide"]').click();
      });
      it('total confirmed: 3.116.398', () => {
        cy.get('[data-test-id="summary-total-confirmed"]').should(
          'have.text',
          '3.116.398',
        );
      });
      it('total deaths: 217.153', () => {
        cy.get('[data-test-id="summary-total-deaths"]').should(
          'have.text',
          '217.153',
        );
      });
      it('total recovered: 928.658', () => {
        cy.get('[data-test-id="summary-total-recovered"]').should(
          'have.text',
          '928.658',
        );
      });
    });
  });
});
