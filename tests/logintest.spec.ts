import { test, expect } from '../fixtures/customFixture'
import { Test_Data } from '../test-data/testData';
//import { LoginPage } from '../pages/LoginPage';
//import { ProductList } from '../pages/ProductList';
//import { CartPage } from '../pages/CartPage';

test('login sauce demo', async ({ page , loginPage}) => {
 // const loginPage = new LoginPage(page);
  await page.goto(Test_Data.url.inventory);
//  await loginPage.dologin('standard_user', 'secret_sauce');
await expect (page).toHaveURL(Test_Data.url.inventory);
 
});


test('add product to cart', async ({ page , loginPage , productList , cart }) => {

 // const loginPage = new LoginPage(page);
 // await page.goto("/");
 // await loginPage.dologin(Test_Data.user.username, Test_Data.user.password);
 
  
  //await expect (page).toHaveURL(Test_Data.url.inventory);
  await page.goto(Test_Data.url.inventory);
  //const productList = new ProductList(page);
  await productList.addProductToCart();
  await productList.clickOnCart();

  await expect (page).toHaveURL(Test_Data.url.cart);
  //const cart = new CartPage(page);
  console.log("verify--"+await cart.getInventoryName().textContent());
  expect(await cart.getInventoryName().textContent()).toBe("Sauce Labs Backpack");

});


