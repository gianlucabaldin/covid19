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

  /* to review based on table shown columns (based on window width)
  context('should show', () => {
    it('2.859 total cases for Abruzzo Region', () => {
      cy.get('[data-test-id="row-Abruzzo"]')
        .find('td')
        .then((cells) => {
          const { length } = cells;
          expect(cells[length - 1]).contains('33.820');
        });
    });
  });
  */
});
