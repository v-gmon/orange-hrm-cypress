const { LoginPage } = require("../../support/pageObjects/loginPage");
const loginCredential  = require("../../fixtures/loginCredential.json")


describe('OrangeHRM Login Test', () => {
  const loginPage = new LoginPage();

  it('should login with valid credentials', () => {
    loginPage.visit();
    loginPage.login(loginCredential.user, loginCredential.password);
    loginPage.waitForRequests();
    loginPage.verifyDashboard();
  });
});
