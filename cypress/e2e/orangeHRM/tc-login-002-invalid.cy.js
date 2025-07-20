describe('OrangeHRM Invalid Login Test', () => {
  it('should display error message for invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('salah');
    cy.get('input[name="password"]').type('salah');

    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });
});
