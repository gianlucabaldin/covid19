/* eslint-disable spaced-comment */
/// <reference types="cypress" />

context('component integration', () => {
  before(() => {
    cy.visit('/');
  });

  context('switch location', () => {
    context('to Europe', () => {
      it('changes navbutton color', () => {
        cy.get('[data-test-id="nav-button-europe"]').should(
          'have.class',
          'MuiButton-outlinedPrimary',
        );
        cy.get('[data-test-id="nav-button-europe"]').click();
        cy.get('[data-test-id="nav-button-europe"]').should(
          'have.class',
          'MuiButton-containedPrimary',
        );
      });
      describe('ìt shows', () => {
        it('the eurpean summary', () => {
          cy.get('[data-test-id="europe-container-summary"]').should(
            'be.visible',
          );
        });

        it('a country table', () => {
          cy.get('[data-test-id="europe-country-table"]').should('be.visible');
        });
      });
    });

    context('to Worldwide', () => {
      it('changes navbutton color', () => {
        cy.get('[data-test-id="nav-button-worldwide"]').should(
          'have.class',
          'MuiButton-outlinedPrimary',
        );
        cy.get('[data-test-id="nav-button-worldwide"]').click();
        cy.get('[data-test-id="nav-button-worldwide"]').should(
          'have.class',
          'MuiButton-containedPrimary',
        );
      });
      describe('it shows', () => {
        it('the worldwide summary', () => {
          cy.get('[data-test-id="worldwide-container-summary"]').should(
            'be.visible',
          );
        });

        it('a country table', () => {
          cy.get('[data-test-id="worldwide-country-table"]').should(
            'be.visible',
          );
        });
      });
    });
  });

  context('change languages', () => {
    before(() => {
      cy.get('[data-test-id="language-ita"]').click();
    });
    it('switch to italian', () => {
      cy.get('[data-test-id="logo-subtitle"]').should(
        'contain.text',
        'Ultimi aggiornamenti e dati storici',
      );
    });
  });
});
