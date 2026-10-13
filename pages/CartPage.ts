import {Page , Locator} from '@playwright/test'

export class CartPage{

    page : Page;
    checkCart : Locator;
    constructor(page : Page){
        this.page = page;
        this.checkCart = page.getByTestId('inventory-item-name');
    }



 getInventoryName() : Locator{
    return this.checkCart;
 }

}