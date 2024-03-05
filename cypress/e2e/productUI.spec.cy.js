/// <reference types='cypress'/>

import { productPage } from "../POM/productPage"
import { checkoutPage } from "../POM/checkoutPage"
import { chartPage } from "../POM/chartPage"
import checkoutData from "../fixtures/checkoutData.json"
import productData from "../fixtures/productData.json"

describe('test', () => {
    
    beforeEach(() => {

        const username = Cypress.env('VALID_USER_USERNAME')
        const password = Cypress.env('VALID_USER_PASSWORD')
        
        cy.login(username, password)

        //I tried to get and set cookies and create few test cases, but I could't solve the issue with application behaviour
        //Unfortunately I could only created whole flow as one test
        
        // cy.getCookie('session-username').then( cookie => {
        //             cookieValue = cookie.value
        //             cy.log(cookieValue)
        //         })

        // cy.setCookie('session-username', 'cookieValue')

        // cy.wait(2000)

    })
    it('test1', () => {
        //add first product to chart
        productPage.addToChart()
        
        //verify chart icon
        productPage.verifyChartButton(1)
        
        //add one more product to chart
        productPage.addSecondItemToChart(2)
        
        //open chart
        productPage.openCart()
        
        //verify if both produccts are present
        chartPage.verifyCartItems([productData.firstProductName, productData.secondProductName])

        //remove first added product from chart
        chartPage.removeItemFromChart()

        //verify if second item is present
        chartPage.verifyCartItems(productData.secondProductName)

        //go to checkout page
        chartPage.goToCheckoutPage()

        //fill required data on checkout page
        checkoutPage.checkoutFormComplition(checkoutData.firstName, checkoutData.lastName, checkoutData.postalCode)

        //verify if second product is present
        chartPage.verifyCartItems(productData.secondProductName)

        //verify info page
        checkoutPage.checkingInfoPage()

        //complete order
        checkoutPage.completeOrder()

        //verify if order is completed successfully
        checkoutPage.verifyOrder()
    })

})