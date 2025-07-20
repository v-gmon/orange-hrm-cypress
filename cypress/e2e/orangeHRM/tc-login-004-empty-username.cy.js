describe('OrangeHRM Login - Empty Username', () => {
  it('should show required message when username is empty', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="password"]').type('admin123');

    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-group:has(input[name="username"]) .oxd-text')
      .should('be.visible')
      .and('contain', 'Required');
  });
});
