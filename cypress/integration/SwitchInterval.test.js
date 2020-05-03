/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Switch Interval', () => {
  before(() => {
    cy.visit('/');
  });

  it('should show the switch', () => {
    cy.get('[data-test-id="switch-interval-container"]').should('be.visible');
  });

  context('with two options', () => {
    it('historical', () => {
      cy.get('[data-test-id="switch-interval-container"]').should(
        'contain.text',
        'historical',
      );
    });

    it('Last Ten Days', () => {
      cy.get('[data-test-id="switch-interval-container"]').should(
        'contain.text',
        'last ten days',
      );
    });
  });
});
