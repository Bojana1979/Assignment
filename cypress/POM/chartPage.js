import { productPage } from "./productPage";

class ChartPage {
  

    get cardItem () {
        return cy.get('.cart_item')
    }

    get checkoutButton () {
        return cy.get('[data-test="checkout"]')
    }
    
    
    verifyCartItems (expectedItems) {
        //Implement logic to check items in the chart
        if(Array.isArray(expectedItems)) {
            expectedItems.forEach(item => {
                this.cardItem.contains(item);
            });
        }else {
            this.cardItem.contains(expectedItems)
        }
    }

    removeItemFromChart () {
        //implement logic to delete first item from the chart
        productPage.removeProductButton.click()
    }

    goToCheckoutPage () {
        //implement logic for going to checkout page
        this.checkoutButton.click()
    }
}

export const chartPage = new ChartPage()