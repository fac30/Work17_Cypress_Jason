describe("Newsletter Subscribe Form", () => {
  beforeEach(() => { cy.visit("http://localhost:3000") })

  it("allows users to subscribe to the email list", () => {
		cy.getByData('email-input')
			.type('tom@aol.com')
		cy.getByData('submit-button')
			.click()
		cy.getByData('success-message')
			.should('exist')
			.contains('tom@aol.com')
	})

	it("does not accept invalid emails", () => {
		cy.getByData('email-input')
			.type('tom')
		cy.getByData('submit-button')
			.click()
		cy.getByData('success-message')
			.should('not.exist')
	})

	it("does not accept existing subscribers", () => {
		cy.getByData('email-input')
			.type('john@example.com')
		cy.getByData('submit-button')
			.click()
		cy.getByData('success-message')
			.should('not.exist')
	})
})