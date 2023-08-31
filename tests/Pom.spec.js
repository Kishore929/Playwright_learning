const { test, expect } = require('@playwright/test');
const { Login } = require('../Pages/Login');
const { Home } = require('../Pages/Home');
const { Cart } = require('../Pages/Cart');

test('Pom', async ({ page }) => {

    // Login
    const login= new Login(page);
    await login.gotoLoginpage();
    await login.clickLogin('pavanol','test@123')
    await page.waitForTimeout(3000)

    // Home
    const home=new Home(page);
   await home.addProductToCart('HTC One M9');
    await home.gotocart();
   await page.waitForTimeout(3000);

    // Cart
   const cart=new Cart(page);
   const status=await cart.checkProductInCart('HTC One M9')
    expect(await status).toBe(true);

   await page.waitForTimeout(3000);
});
