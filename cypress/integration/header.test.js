// / <reference types="cypress" />

context('Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  context('should have', () => {
    it('logo', () => {
      cy.get('[data-test-id="logo"]').should('have.text', 'covid19');
    });
    it('logo subtitle', () => {
      cy.get('[data-test-id="logo-subtitle"]').should(
        'have.text',
        'Latest updates & historical data',
      );
    });
    it('github link', () => {
      cy.get('[data-test-id="github-link"').should(
        'have.property',
        'href',
        'https://github.com/gianlucabaldin',
      );
    });
    it('navbar with 4 buttons', () => {
      cy.get('[data-test-id="logo"]').should('have.text', 'covid19');
    });
  });
});
