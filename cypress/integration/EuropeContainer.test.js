/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('EuropeContainer', () => {
  before(() => {
    cy.visit('/');
    cy.get('[data-test-id="nav-button-europe"]').click();
  });

  context('should have', () => {
    it('a summary', () => {
      cy.get('[data-test-id="europe-container-summary"]').should('be.visible');
    });

    it('a country table', () => {
      cy.get('[data-test-id="europe-country-table"]').should('be.visible');
    });
  });

  context('fetches data correctly', () => {
    context('within summary', () => {
      it('confirmed', () => {
        cy.get('[data-test-id="summary-total-confirmed"]').should(
          'have.text',
          '1.169.227',
        );
      });
      it('deaths', () => {
        cy.get('[data-test-id="summary-total-deaths"]').should(
          'have.text',
          '129.236',
        );
      });
      it('recovered', () => {
        cy.get('[data-test-id="summary-total-recovered"]').should(
          'have.text',
          '441.784',
        );
      });
      it('last-update', () => {
        cy.get('[data-test-id="summary-last-update"]').should(
          'have.text',
          'April 29, 2020 12:00 AM',
        );
      });
    });

    context('within table', () => {
      it('AUT confirmed 15.402', () => {
        cy.get('[data-test-id="td-AUT-confirmed"]').should(
          'have.text',
          '15.402',
        );
      });
      it('AUT recovered 12.779', () => {
        cy.get('[data-test-id="td-AUT-recovered"]').should(
          'have.text',
          '12.779',
        );
      });
      it('AUT deaths 580', () => {
        cy.get('[data-test-id="td-AUT-deaths"]').should('have.text', '580');
      });
    });
  });
});
