/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('WorldwideContainer', () => {
  before(() => {
    cy.visit('/');
    cy.get('[data-test-id="nav-button-worldwide"]').click();
  });

  context('should have', () => {
    it('a summary', () => {
      cy.get('[data-test-id="worldwide-container-summary"]').should(
        'be.visible',
      );
    });

    it('a chart', () => {
      cy.get('[data-test-id="worldwide-chart-container"]').should('be.visible');
    });

    it('a country table', () => {
      cy.get('[data-test-id="worldwide-country-table"]').should('be.visible');
    });
  });

  context('fetches data correctly', () => {
    context('within summary', () => {
      it('confirmed', () => {
        cy.get('[data-test-id="summary-total-confirmed"]').should(
          'have.text',
          '3.116.398',
        );
      });
      it('deaths', () => {
        cy.get('[data-test-id="summary-total-deaths"]').should(
          'have.text',
          '217.153',
        );
      });
      it('recovered', () => {
        cy.get('[data-test-id="summary-total-recovered"]').should(
          'have.text',
          '928.658',
        );
      });
      it('last-update', () => {
        cy.get('[data-test-id="summary-last-update"]').should(
          'have.text',
          'April 28, 2020 12:00 AM',
        );
      });
    });

    context('within table', () => {
      it('AFG confirmed 1.989', () => {
        cy.get('[data-test-id="td-AFG-confirmed"]').should(
          'have.text',
          '1.939',
        );
      });
      it('AFG recovered 252', () => {
        cy.get('[data-test-id="td-AFG-recovered"]').should('have.text', '252');
      });
      it('AFG deaths 60', () => {
        cy.get('[data-test-id="td-AFG-deaths"]').should('have.text', '60');
      });
    });
  });
});
