## About the application

This application was writter just as a playground in my spare time during Covid19 quarantine, with the purpose to try out some npm packages (like react-i18n-next and react-vis) and new methodology (TDD/BDD) I haven't used before and to give a fancy & easy application to spread infos about Covid19 status, with particular focus on my country -Italy- is beign affetcted hardly by the virus.

Given that my goal was to deploy it as soon as possible (since I hope in few months it will be ...useless) it's still work in progress, any bug report is appreciated.

Live demo here -->

## Libraries used

- Base template project: [Create React App](https://github.com/facebook/create-react-app).
- UI Framework: [MaterialUI](https://material-ui.com/)
- Code formatting: ESLint / Prettier
- Charts: [React-vis](https://uber.github.io/react-vis/)
- Flag icons: [react-world-flags](https://www.npmjs.com/package/react-world-flags)
- Translationa: [i18n-next](https://react.i18next.com/)
- Testing: [Jest](https://jestjs.io/docs/en/expect.html) and JestCli , [Enzyme](https://gist.github.com/jahe/9bf2cb1f849b7ed96c6ce20ede7f66a2), [Jest-Enzyme Matchers](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md) and [Cypress](https://www.cypress.io/)

## Special methodologies used

- TDD - [react-tdd](https://github.com/15Dkatz/react-tdd/blob/master/lootcheck/src/components/App.test.js)

## Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run cypress`

Lanuches E2E Cypress tests within its Test Runner console

### `npm run cypress:headless`

Lanuches E2E Cypress tests in headless mode.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the
