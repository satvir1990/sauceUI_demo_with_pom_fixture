import {test , expect} from '../fixtures/customFixture'
import { LoginPage } from '../pages/LoginPage'
import { Test_Data } from '../test-data/testData';

test('authenticated' , async ({page , loginPage}) => {
    await page.goto("/");
    await loginPage.dologin(Test_Data.user.username , Test_Data.user.password);
    await expect (page).toHaveURL(Test_Data.url.inventory);
    await page.context().storageState({path : 'authUser.json'})

} )
