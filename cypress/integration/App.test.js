/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('logo', () => {
      cy.get('[data-test-id="logo"]').should('have.text', 'Covid-19');
    });
  });
});
