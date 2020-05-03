/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('App', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have a chart', () => {
    cy.get('[data-test-id="chart"]').should('be.visible');
  });
});
