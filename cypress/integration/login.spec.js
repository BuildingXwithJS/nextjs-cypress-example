/// <reference types="cypress" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('Should login with correct credentials', () => {
    // type login
    cy.get('#login').type('yamalight');

    // type pass
    cy.get('#pass').type('123');

    // click on login button
    cy.get('#dologin').click();

    // make sure we get successful greeting message
    cy.get('h1').should('have.text', 'Hello yamalight!');
  });

  it('Should not login with wrong credentials', () => {
    // type login
    cy.get('#login').type('wrong');

    // type pass
    cy.get('#pass').type('pass');

    // click on login button
    cy.get('#dologin').click();

    // make sure we get successful greeting message
    cy.get('div')
      .contains('Unauthorized')
      .should('exist');
  });
});
