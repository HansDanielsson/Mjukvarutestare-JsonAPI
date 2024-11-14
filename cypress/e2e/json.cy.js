describe('Fetching JSON', () => {


  beforeEach(() => {
    cy.visit('index.html')
  })

  it('Fetch JSON from file', () => {
    // Klicka på Get JSON from file button
    cy.get('#btnJson').click()

    // Kontrollera värdet i nameOutput
    // Cypress inväntar Async funktionallitet automatiskt
    cy.get('#nameOutput').should('contains.text', 'Hans')
  })

  it('Fetch JSON from ISS API', () => {
    // Klicka på Get JSON from file button
    cy.get('#btnIss').click()

    // Kontrollera värdet i nameOutput
    // Cypress inväntar Async funktionallitet automatiskt
    cy.get('#nameOutput').should('contains.text', 'iss')
  })
})