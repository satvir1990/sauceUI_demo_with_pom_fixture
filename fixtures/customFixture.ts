import {test as base} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { ProductList } from '../pages/ProductList'
import { CartPage } from '../pages/CartPage'


type Pgefixture= {
    loginPage : LoginPage;
    productList : ProductList;
    cart : CartPage;
}

export const test = base.extend<Pgefixture>({
    loginPage: async ({ page }, use) => {
        // Automatically instantiate LoginPage using the built-in 'page' fixture
        const loginPage = new LoginPage(page);
        await use(loginPage); // Provide it to the test
      },

      productList: async ({ page }, use) => {
        // Automatically instantiate ProductList using the built-in 'page' fixture
        const productList = new ProductList(page);
        await use(productList); // Provide it to the test
      },

      cart: async ({ page }, use) => {
        // Automatically instantiate cart using the built-in 'page' fixture
        const cart = new CartPage(page);
        await use(cart); // Provide it to the test
      },


})

export {expect} from '@playwright/test';