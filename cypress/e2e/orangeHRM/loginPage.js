export class LoginPage {
    visit() {
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('validateLogin');
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/events/push').as('eventRequest');
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('loginRequest');
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    getUsernameField() {
        return cy.get('input[name="username"]');
    }

    getPasswordField() {
        return cy.get('input[name="password"]');
    }

    getLoginButton() {
        return cy.get('button[type="submit"]');
    }

    verifyDashboard() {
        cy.url().should('include', '/dashboard');
        cy.get('h6').should('contain', 'Dashboard');
    }

    verifyInvalidCredentials() {
        cy.get('.oxd-alert-content-text')
            .should('be.visible')
            .and('contain', 'Invalid credentials');
    }

    verifyRequiredPasswordMessage() {
        cy.get('.oxd-input-group:has(input[name="password"]) .oxd-text')
            .should('be.visible')
            .and('contain', 'Required');
    }

    verifyRequiredUsernameMessage() {
        cy.get('.oxd-input-group:has(input[name="username"]) .oxd-text')
            .should('be.visible')
            .and('contain', 'Required');
    }

    waitForRequests() {
        cy.wait('@validateLogin').its('response.statusCode').should('eq', 302);
        cy.wait('@eventRequest').its('response.statusCode').should('eq', 200);
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
    }

    login(username, password) {
        this.getUsernameField().clear();
        this.getPasswordField().clear();

        if (username) {
            this.getUsernameField().type(username);
        }

        if (password) {
            this.getPasswordField().type(password);
        }

        this.getLoginButton().click();
    }
}
