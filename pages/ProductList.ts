import {Page , Locator} from '@playwright/test'

export class ProductList{

    page : Page;
    addToCart : Locator;
    cart : Locator;

    constructor (page : Page){
        this.page = page;
        this.addToCart = page.getByTestId("add-to-cart-sauce-labs-backpack");
        this.cart = page.getByTestId('shopping-cart-link');
    }

    async addProductToCart(){
        await this.addToCart.click();
    }

    async clickOnCart(){
        await this.cart.click();
    }
}
