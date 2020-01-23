# Vue.js Example Application

This application is a starting point application for demos. It is based on the [Vuejs 2 Authentication Tutorial](https://auth0.com/blog/vuejs2-authentication-tutorial/) created on the Auth0 blog.

![Vue Example](/docs/images/screenshot.png?raw=true "Vue Example")

## Presentation Materials

Did you get this link from seeing a presentation I did on **Securing Vue.js with OpenID Connect and OAuth2**? Here are some further reading materials for the presentation.

- [Slide Deck](https://www.slideshare.net/secret/2keSpaXJYIWIq1)
- [OWASP HTML5 Security - Local Storage](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage)
- [OAuth 2.0 for Browser-Based Apps](https://tools.ietf.org/html/draft-parecki-oauth-browser-based-apps-02)
- [Announcing the General Availability of the Auth0 SPA JS SDK](https://community.auth0.com/t/announcing-the-general-availability-of-the-auth0-spa-js-sdk/27399)
- [Auth0 SPA SDK Docs](https://auth0.github.io/auth0-spa-js/index.html)

## Getting Started

1. Install [Visual Studio Code](https://code.visualstudio.com/), the [Insiders Edition](https://code.visualstudio.com/insiders) is highly recommended.
1. Ensure you have vue and nodemon globally installed `npm install -g @vue/cli nodemon`
1. Clone the repository `git clone https://github.com/NotMyself/2019-nyc-code-camp-securing-vue.git vue-example`
1. Change directory into the cloned repository `cd vue-example`
1. Open the workspace `code vue-example.code-workspace`
1. Open the integrated terminal in code <kbd>Ctrl</kbd>+<kbd>`</kbd>
1. Run the init script `./script/init`
1. [Register for Application Keys](https://auth0.com/docs/quickstart/spa/vuejs#get-your-application-keys)
1. Update **/client/.env** with the appropriate values.
1. [Register an API](https://auth0.com/docs/quickstart/backend/nodejs#create-an-api)
1. Update **/server/.env** with the appropriate values.
1. Run the start script `./script/start`

This will start both the backend server and the front end client. To quit use <kbd>Ctrl</kbd>+<kbd>C</kbd>.

## Suggested Code Extensions

This project has a set of suggested extensions for Visual Studio Code. They are intended to make the development experience on the code base easier.

- [dotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env syntax highlighting
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint into VS Code
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - Show the file size cost of your imports
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - VS Code package to format your JavaScript / TypeScript / CSS using Prettier.
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Vue tooling for VS Code
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) - REST Client allows you to send HTTP request and view the response in Visual Studio Code directly.

## Editor Settings

This project has a set of editor settings for Visual Studio Code. They are related to the suggested extension and wire up some automated code formatting.

```json
{
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "prettier.eslintIntegration": true,
}
```
Combined these settings will cause the prettier code formatter to run on save as well as configure prettier to respect eslint defined rules.

## Testing the API

You can open the `example.http` file in the `server` directory to test the api with [rest-client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). If you accepted the workspace suggested extensions, it should already be installed.

Simply, click the `Send Request` link above the API call you want to make.

![Rest Client Usage](/docs/images/example.http.gif?raw=true "Rest Client Usage")
