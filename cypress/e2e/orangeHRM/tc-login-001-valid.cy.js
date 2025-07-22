describe('OrangeHRM Login Test', () => {
  it('should login with valid credentials', () => {
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('validateLogin');
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/events/push').as('eventRequest');
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('loginRequest');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');

    cy.get('button[type="submit"]').click();

    cy.wait('@validateLogin').its('response.statusCode').should('eq', 302);
    cy.wait('@eventRequest').its('response.statusCode').should('eq', 200);
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');
  });
});
