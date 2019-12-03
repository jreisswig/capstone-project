describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the correct title', () => {
    cy.title().should('equal', 'React App')
  })

  it('has a navigation', () => {
    cy.get('[class^=Nav__NavButton-sc-141k9fz-1]')
      .first()
      .click()
  })
})

/* describe('Home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    it('has the correct title', () => {
      cy.title().should('equal', 'React App')
    })
    it('has a navigation', () => {
      cy.contains('Create').click()
      cy.contains('Create!')
    })
    describe('Card', () => {
      it('has a bookmark', () => {
        cy.get('[class^=Card__]')
          .first()
          .find('[class^=Bookmark]')
          .click()
      })
    })
  }) */
