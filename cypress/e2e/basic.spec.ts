context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic', () => {
    const url = 'http://localhost:3333/'
    cy.url().should('eq', url)
  })
})
