const mockData = '[{"id":"5289a241-4a94-4e7a-942e-e6be8cad9d56","name":"Mock Saving Account","type":"Savings","balance":125662.22},{"id":"747db1cf-581d-48e1-be94-99c8e212c356","name":"Mock Private Account","type":"CurrentAccount","balance":-1420.14}]'

describe('First steps', () => {
  it('Visits the site', () => {

    cy.intercept('http://localhost:4000/accounts', mockData );
    cy.visit('localhost:4200');

  });
});