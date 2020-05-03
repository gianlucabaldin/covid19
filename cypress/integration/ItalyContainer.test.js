/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('ItalyContainer', () => {
  before(() => {
    cy.visit('/');
  });

  context('should have', () => {
    it('the summary', () => {
      cy.get('[data-test-id="italy-container-summary"]').should('be.visible');
    });
    it('a switch', () => {
      cy.get('[data-test-id="switch-interval-container"]').should('be.visible');
    });
    it('italy charts', () => {
      cy.get('[data-test-id="italy-chart-container"]').should('be.visible');
    });
    it('regions table', () => {
      cy.get('[data-test-id="italy-container-regions"]').should('be.visible');
    });
  });

  context('fetches data correctly', () => {
    context('within summary', () => {
      it('swabs: 1.757.659', () => {
        cy.get('[data-test-id="summary-total-swabs"]').should(
          'have.text',
          '1.757.659',
        );
      });
      it('totale deceased: 26.644', () => {
        cy.get('[data-test-id="summary-total-deceased"]').should(
          'have.text',
          '26.644',
        );
      });
      it('total cases: 197.675', () => {
        cy.get('[data-test-id="summary-total-cases"]').should(
          'have.text',
          '197.675',
        );
      });
      it('last-update', () => {
        cy.get('[data-test-id="summary-last-update"]').should(
          'have.text',
          'April 26, 2020 7:00 PM',
        );
      });
    });

    context('within table', () => {
      it('Abruzzo intensive care: 24', () => {
        cy.get('[data-test-id="td-Abruzzo-terapia-intensiva"]').should(
          'have.text',
          '24',
        );
      });

      it('Abruzzo swabs: 33.820', () => {
        cy.get('[data-test-id="td-Abruzzo-tamponi"]').should(
          'have.text',
          '33.820',
        );
      });

      it('Abruzzo deaths: 295', () => {
        cy.get('[data-test-id="td-Abruzzo-deceduti"]').should(
          'have.text',
          '295',
        );
      });
    });
  });
});
