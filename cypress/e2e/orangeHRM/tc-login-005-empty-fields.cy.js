describe('OrangeHRM Login - Empty Username and Password', () => {
  it('should show required messages when both fields are empty', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-group:has(input[name="username"]) .oxd-text')
      .should('be.visible')
      .and('contain', 'Required');

    cy.get('.oxd-input-group:has(input[name="password"]) .oxd-text')
      .should('be.visible')
      .and('contain', 'Required');
  });
});
