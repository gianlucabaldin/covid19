/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Worldwide container', () => {
  before(() => {
    cy.visit('/');
    cy.get('[data-test-id="nav-button-worldwide"]').click();
  });

  context('should have', () => {
    it('a table', () => {
      cy.get('[data-test-id="worldwide-country-table"]').should('be.visible');
    });
    it('a table header', () => {
      cy.get('.MuiTableHead-root').should('be.visible');
    });
    it('a table body', () => {
      cy.get('.MuiTableBody-root').should('be.visible');
    });
  });
});
