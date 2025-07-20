describe('OrangeHRM Login Test', () => {
  it('should login with valid credentials', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');
  });
});
