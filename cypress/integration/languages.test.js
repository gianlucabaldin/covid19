/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Languages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('italy flag', () => {
      cy.get('[data-test-id="language-ita"]').should('be.visible');
    });
    it('english flag', () => {
      cy.get('[data-test-id="language-eng"]').should('be.visible');
    });
  });
  context('language', () => {
    it('on app load default english', () => {
      cy.get('[data-test-id="logo-subtitle"]').should(
        'have.text',
        'Latest updates & historical data',
      );
    });
    it('on app load it should show in english', () => {
      cy.get('[data-test-id="language-ita"]').click();
      cy.get('[data-test-id="logo-subtitle"]').should(
        'have.text',
        'Ultimi aggiornamenti e dati storici',
      );
    });
  });
});
