import { LoginPage } from './loginPage';
describe('OrangeHRM Login - Empty Username', () => {
  const loginPage = new LoginPage();
  it('should show required message when username is empty', () => {
    loginPage.visit(); 
    loginPage.login('', 'admin123');
    loginPage.verifyRequiredUsernameMessage();
  });
});
