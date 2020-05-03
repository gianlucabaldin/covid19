/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('App', () => {
  before(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('header', () => {
      cy.get('[data-test-id="appbar"]').should('be.visible');
    });

    it('navbuttons', () => {
      cy.get('[data-test-id="nav-buttons"]').should('be.visible');
    });

    it('language', () => {
      cy.get('[data-test-id="language-container"]').should('be.visible');
    });

    // Italy as default section after loading
    it('italy container', () => {
      cy.get('[data-test-id="italy-container"]').should('be.visible');
    });
  });
});
