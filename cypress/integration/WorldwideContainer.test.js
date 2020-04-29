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

    it('one chart summary', () => {
      cy.get('[data-test-id="worldwide-chart-container"]').should('be.visible');
    });
  });

  context('fetches data correctly', () => {
    it('confirmed', () => {
      cy.get('[data-test-id="summary-total-confirmed"]').should(
        'have.text',
        '3116398',
      );
    });
    it('deaths', () => {
      cy.get('[data-test-id="summary-total-deaths"]').should(
        'have.text',
        '217153',
      );
    });
    it('recovered', () => {
      cy.get('[data-test-id="summary-total-recovered"]').should(
        'have.text',
        '928658',
      );
    });
    it('last-update', () => {
      cy.get('[data-test-id="summary-last-update"]').should(
        'have.text',
        'April 28, 2020 12:00 AM',
      );
    });
  });
});
