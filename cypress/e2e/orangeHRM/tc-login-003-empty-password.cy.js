const { LoginPage } = require("../../support/pageObjects/loginPage");
const loginCredential = require("../../fixtures/loginCredential.json");
describe('OrangeHRM Login - Empty Password', () => {
  const loginPage = new LoginPage();
  it('should show required message when password is empty', () => {
    loginPage.visit();
    loginPage.login(loginCredential.user);
    loginPage.verifyRequiredPasswordMessage();
  });
});
