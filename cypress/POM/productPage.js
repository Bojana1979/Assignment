

class ProductPage {

    get addToChartButton () {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    get addToChartButtonSecondItem () {
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }

    get productButton () {
        return cy.get('button')
    }

    get removeProductButton () {
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    get removeSecondProductButton () {
        return cy.get('[data-test="remove-sauce-labs-bike-light"]')
    }

    get chartIcon () {
        return cy.get('.shopping_cart_link')
    }

    get items () {
        return cy.get('.inventory_item')
    }

    get itemImage () {
        return cy.get('.inventory_item_img #item_0_img_link')
    }
   

    


    addToChart () {
        //implement logic to add first product in to chart
        this.addToChartButton.click()
        this.removeProductButton.should('have.text','Remove')
    }

    verifyChartButton (expectedCount) {
        //implement logic to verify chart icon
        this.chartIcon.should('have.text', expectedCount.toString())
    }

    addSecondItemToChart (expectedCount) {
        //implement logic to add secont product in to chaart
        this.itemImage.click()
        this.addToChartButtonSecondItem.click()
        this.removeSecondProductButton.should('have.text','Remove')
        this.chartIcon.should('have.text', expectedCount.toString())
    }

    openCart () {
        // Implement logic to open the cart
        this.chartIcon.click();
    }
}

export const productPage = new ProductPage()