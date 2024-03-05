import checkoutData  from "../fixtures/checkoutData.json"

class CheckoutPage {
    get firstNameInputField () {
        return cy.get('[data-test="firstName"]')
    }

    get lastNameInputField () {
        return cy.get('[data-test="lastName"]')
    }

    get postalCodeInputField () {
        return cy.get('[data-test="postalCode"]')
    }

    get continueButton () {
        return cy.get('#continue')
    }

    get headerContainer () {
        return cy.get('#header_container')
    }

    get summaryInfo () {
        return cy.get('.summary_info')
    }

    get summaryTotalLabel () {
        return cy.get('.summary_info_label.summary_total_label')
    }

    get finishButton () {
        return cy.get('[data-test="finish"]')
    }

    get headerSecondaryContainer () {
        return cy.get('.header_secondary_container')
    }

    get completeHeader () {
        return cy.get('.complete-header')
    }

    get text () {
        return cy.get('.complete-text')
    }

    checkoutFormComplition (firstName, lastName, postalCode) {
        //implement logic for filling checkout data
        this.firstNameInputField.should('be.visible').type(firstName)
        this.lastNameInputField.should('be.visible').type(lastName)
        this.postalCodeInputField.should('be.visible').type(postalCode)
        this.continueButton.click()
    }

    checkingInfoPage () {
        //implement logic to verify info page
        this.headerContainer.contains(checkoutData.checkoutHeaderText)
        this.summaryTotalLabel.should('contain', checkoutData.totalSum)
    }

    completeOrder () {
        //implement logic to complete order
        this.finishButton.click()
    }

    verifyOrder () {
        //implement logic to verify order
        this.headerSecondaryContainer.contains(checkoutData.checkoutSecondaryHeaderText)
        this.completeHeader.should('have.text',checkoutData.completeHeaderText)
        this.text.should('have.text', checkoutData.checkoutText)
    }


}

export const checkoutPage = new CheckoutPage()