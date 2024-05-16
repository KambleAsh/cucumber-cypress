import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import TestPage from './testPage'

Given('I open the website', () => {
   TestPage.visit()
});

When('I enter my username {string} and password {string}', (username, password) => {
    TestPage.fillUsername(username)
    TestPage.fillPassword(password)
});

And('I click the login button', () => {

  TestPage.login()

});

Then('I should be able to see error message for incorrect password', () => {

  TestPage.displayErrorMessage()

});



Then('I should be able to login', () => {

    TestPage.verifyLogo()
  
  });

  And('I change the filter to price low to high dropdown', () => {
    TestPage.filterDropdown()
  });

 Then('I add the required product to cart' ,() => {
    TestPage.selectProduct()
 });

 Then('I should verify the cart details like price  and description  on cart page' , () => {

    TestPage.verifyCart()
 });

 Then('And I checkout product' ,() => {
    TestPage.checkout()
 });

 Then('I fill all the information' ,() =>{
    TestPage.fillInfo();
 });

 Then('I click continue' ,() =>{
    TestPage.continueClick()
 });

 Then('I finish the checkout' ,() => {
    TestPage.finish()
 })


