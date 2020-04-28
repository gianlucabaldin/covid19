/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */ // ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// https://github.com/cypress-io/cypress/issues/909
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-jest-adapter';

const cyEnv = Cypress.env();
cyEnv.baseUrl && Cypress.config('baseUrl', cyEnv.baseUrl);

// Alternatively you can use CommonJS syntax:
// require('./commands')
