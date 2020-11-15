describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should have the name of the app on the navbar', () => {
    cy.get('.navbar-brand').contains('conduit');
  });
});
