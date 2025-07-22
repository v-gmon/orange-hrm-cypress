import { LoginPage } from './loginPage';
describe('OrangeHRM Login - Empty Password', () => {
  const loginPage = new LoginPage();
  it('should show required message when password is empty', () => {
    loginPage.visit();
    loginPage.login('Admin');
    loginPage.verifyRequiredPasswordMessage();
  });
});
