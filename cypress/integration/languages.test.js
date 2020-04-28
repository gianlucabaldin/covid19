/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Languages', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  context('should have', () => {
    it('language container', () => {
      cy.get('[data-test-id="language-container"]').should(
        'have.text',
        'Covid 19',
      );
    });
    it('italy flag', () => {
      cy.get('[data-test-id="language-ita"]').should(
        'have.text',
        'Latest updates & historical data',
      );
    });
    it('english flag', () => {
        cy.get('[data-test-id="language-ita"]').should(
      });
    });
  });
});
