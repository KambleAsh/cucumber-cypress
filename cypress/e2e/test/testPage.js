const URL ='https://www.saucedemo.com/'
const USER_INPUT ='input[name="user-name"]'
const UPASSWORD_INPUT ='input[name="password"]'
const LOGIN_BTN ='input[type="submit"]'
const ERROR_MSG ='h3[data-test="error"]'
const LOGO ='.app_logo'
const DESCRIPTION1 =''
const DESCRIPTION2 =''
const PRICE1 =''
const PRICE2 =''

class TestPage{

  static visit(){
    cy.visit(URL)
  }

  static fillUsername(username){
    cy.get(USER_INPUT).type(username)
  }

  static fillPassword(password){
    cy.get(UPASSWORD_INPUT).type(password)
  }

  static login(){
    cy.get(LOGIN_BTN).click()
  }

  static displayErrorMessage(){
    cy.get(ERROR_MSG).contains('Epic sadface').should('be.visible')
  }

  static verifyLogo(){
    cy.get(LOGO).should('be.visible')
  }

  static filterDropdown(){
    cy.get("select")
      .select("Price (low to high)")
      .invoke("text")
      .should("eq", "Price (low to high)")
  }

  static selectProduct(){
    cy.get('.inventory_list').each(($item,index,$list) => {
      if(index = 1){
        DESCRIPTION1 = $item.text()
        PRICE1 =cy.get('.inventory_item_price').text()
        cy.get('button').click()
      }
      if(index =$list.length-1){
        DESCRIPTION2= $item.text()
        PRICE2 =cy.get('.inventory_item_price').text()
        cy.get('button').click()
      }
    })
  }

  static clickShoppingcart(){
    cy.get('.shopping_cart_link').click()
  }

  static verifyCart(){
   cy.get('.cart_item_label').each(($item,index,$list) => {
    if(index =1){
      $item.text().contains(DESCRIPTION1+PRICE1)
    }
    if(index =2){
      $item.text().contains(DESCRIPTION2+PRICE2)
    }
   })
  }

  static checkout(){
    cy.get('#checkout').click()
  }

  static fillInfo(){
    cy.get('input[#first-name]').type('Ashwini')
    cy.get('input[#last-name]').type('Kamble')
    cy.get('input[#postal-code').type('548965')

  }
  static continueClick(){
    cy.get('#continue').click()
  }
  
  static finish(){
    cy.get('#finish').click()
  }
}

export default TestPage

