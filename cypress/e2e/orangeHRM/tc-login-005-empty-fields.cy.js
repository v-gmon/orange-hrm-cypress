const { LoginPage } = require("../../support/pageObjects/loginPage");
describe('OrangeHRM Login - Empty Username and Password', () => {
  const loginPage = new LoginPage();
  it('should show required messages when both fields are empty', () => {
    loginPage.visit();
    loginPage.login('', '');
    loginPage.verifyRequiredUsernameMessage();
    loginPage.verifyRequiredPasswordMessage();
  });
});

