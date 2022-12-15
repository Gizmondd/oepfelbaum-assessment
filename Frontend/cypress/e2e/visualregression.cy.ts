describe('Compare screenshots of the homepage', () => {
  it('should look the same as the golden standard', () => {
    cy.visit('localhost:4200')
    cy.matchImage();
    
  })
})