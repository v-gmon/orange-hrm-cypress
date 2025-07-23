const { LoginPage } = require("../../support/pageObjects/loginPage");
const loginCredential  = require("../../fixtures/loginCredential.json")


describe('OrangeHRM Login Test', () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.visit();
  });
  it('should login with valid credentials', () => {
    loginPage.login(loginCredential.user, loginCredential.password);
    loginPage.waitForRequests();
    loginPage.verifyDashboard();
  });
  it('should display error message for invalid credentials', () => {
    loginPage.login('salah', 'salah');
    loginPage.verifyInvalidCredentials();
  });
  it('should show required message when password is empty', () => {
    loginPage.login(loginCredential.user);
    loginPage.verifyRequiredPasswordMessage();
  });
  it('should show required message when username is empty', () => {
    loginPage.login('', loginCredential.password);
    loginPage.verifyRequiredUsernameMessage();
  });
  it('should show required messages when both fields are empty', () => {
    loginPage.login('', '');
    loginPage.verifyRequiredUsernameMessage();
    loginPage.verifyRequiredPasswordMessage();
  });
});
