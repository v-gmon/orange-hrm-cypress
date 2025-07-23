const { LoginPage } = require("../../support/pageObjects/loginPage");
describe('OrangeHRM Invalid Login Test', () => {
  const loginPage = new LoginPage();

  it('should display error message for invalid credentials', () => {
    loginPage.visit();
    loginPage.login('salah', 'salah');
    loginPage.verifyInvalidCredentials();
  });
});
