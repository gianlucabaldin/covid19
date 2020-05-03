/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('Summary', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('a container', () => {
      cy.get('[data-test-id="italy-container-regions"]').should('be.visible');
    });
    it('a table header', () => {
      cy.get('.MuiTableHead-root').should('be.visible');
    });
    it('a table body', () => {
      cy.get('.MuiTableBody-root').should('be.visible');
    });
  });
});
