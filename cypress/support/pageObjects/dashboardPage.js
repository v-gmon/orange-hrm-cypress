export class DashboardPage {

    verifyDashboard() {
        cy.get('h6').should('contain.text', 'Dashboard');
    }

    verifyUserNameInHeader() {
        cy.get('.oxd-userdropdown-name').should('be.visible');
    }

    verifyTimeAtWork() {
        cy.get('.orangehrm-dashboard-widget-header').contains('Time at Work').should('be.visible');
        cy.get('.orangehrm-attendance-card-bar > .oxd-icon-button').click({ force: true })
        cy.get('.orangehrm-card-container > .oxd-text--h6').contains('Punch').should('be.visible');
    }

    verifyQuickLaunch() {
        cy.get('.orangehrm-dashboard-widget-header').contains('Quick Launch').should('be.visible');
        cy.get('.orangehrm-dashboard-widget-header')
            .contains('Quick Launch')
            .parents('.oxd-sheet')
            .within(() => {
                cy.contains('Assign Leave').should('be.visible');
                cy.contains('Leave List').should('be.visible');
                cy.contains('Timesheets').should('be.visible');
            });
    }

    verifyBuzzLatestPosts() {
        cy.get('.orangehrm-dashboard-widget-header').contains('Buzz').should('be.visible');
    }

    verifyLogoutButton() {
        cy.wait(2000);// Wait for the page to load depend on internet speed, need to add more time if internet is slow
        cy.get('.oxd-userdropdown').should('be.visible');
        cy.get('.oxd-userdropdown').click();
        cy.contains('Logout').click();
        cy.url().should('include', '/auth/login');
        cy.get('h5').should('have.text', 'Login');
    }
}
