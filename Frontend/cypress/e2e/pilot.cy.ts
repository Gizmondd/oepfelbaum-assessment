describe('First steps', () => {
  it('Visits the site', () => {
    cy.visit('localhost:4200')

    cy.get('.list-group-item').first().click();
  })
})