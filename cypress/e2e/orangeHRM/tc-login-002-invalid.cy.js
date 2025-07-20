describe('OrangeHRM Invalid Login Test', () => {
  it('should display error message for invalid credentials', () => {
    // Buka halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Isi dengan kredensial yang salah
    cy.get('input[name="username"]').type('salah');
    cy.get('input[name="password"]').type('salah');

    // Klik login
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan error muncul
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });
});
