const { LoginPage } = require("../../support/pageObjects/loginPage");
const loginCredential = require("../../fixtures/loginCredential.json");
describe('OrangeHRM Login - Empty Username', () => {
  const loginPage = new LoginPage();
  it('should show required message when username is empty', () => {
    loginPage.visit();
    loginPage.login('', loginCredential.password);
    loginPage.verifyRequiredUsernameMessage();
  });
});
