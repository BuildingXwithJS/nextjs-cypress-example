/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should switch tabs', () => {
    // make sure first tab is selected
    cy.get('[role=tablist]')
      .find('[role=tab]')
      .first()
      .click();

    // check that we see first tab content
    cy.get('[role=tabpanel]')
      .first()
      .should('be.visible')
      .should('have.text', 'one!');

    // make sure first tab is selected
    cy.get('[role=tablist]')
      .find('[role=tab]')
      .eq(1)
      .click();

    // check that we see first tab content
    cy.get('[role=tabpanel]')
      .eq(1)
      .should('be.visible')
      .should('have.text', 'two!');
  });

  it('Should load large image', () => {
    // make sure first tab is selected
    cy.get('[role=tablist]')
      .find('[role=tab]')
      .eq(2)
      .click();

    // check that we see first tab content
    cy.get('[role=tabpanel]')
      .eq(2)
      .should('be.visible')
      .should('have.text', 'three!');

    // give time to image to load
    cy.waitForResource('https://picsum.photos/5000', 'img');

    // wait for image to render
    cy.get('img').should('be.visible');
  });
});
