const { LoginPage } = require("../../support/pageObjects/loginPage");
const { DashboardPage } = require("../../support/pageObjects/dashboardPage");
const loginCredential = require("../../fixtures/loginCredential.json");

describe('OrangeHRM Dashboard Test', () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login(loginCredential.user, loginCredential.password);
    });
    it('should verify dashboard is visible', () => {
        dashboardPage.verifyDashboard();
        loginPage.waitForRequests();
    });
    it('should verify user name in header', () => {
        dashboardPage.verifyUserNameInHeader();
    });
    it('should verify time at work widget', () => {
        dashboardPage.verifyTimeAtWork();
    });
    it('should verify quick launch widget', () => {
        dashboardPage.verifyQuickLaunch();
    });
    it('should verify buzz latest posts widget', () => {
        dashboardPage.verifyBuzzLatestPosts();
    });
    it('should verify logout button functionality', () => {
        dashboardPage.verifyLogoutButton();
    });
});