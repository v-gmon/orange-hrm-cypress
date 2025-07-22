import { LoginPage } from './loginPage';

describe('OrangeHRM Login Test', () => {
  const loginPage = new LoginPage();

  it('should login with valid credentials', () => {
    loginPage.visit();
    loginPage.login('Admin', 'admin123');
    loginPage.waitForRequests();
    loginPage.verifyDashboard();
  });
});
