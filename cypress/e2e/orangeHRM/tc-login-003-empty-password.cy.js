describe('OrangeHRM Login - Empty Password', () => {
  it('should show required message when password is empty', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');

    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-group:has(input[name="password"]) .oxd-text')
      .should('be.visible')
      .and('contain', 'Required');
  });
});
