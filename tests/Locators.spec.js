const {test, expect} = require('@playwright/test')

//import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE')

    // await page.locator('#login2').click()
    // await page.click('#login2')
    await page.locator('id=login2').click()
     
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('teat@123')
     //await page.fill('#loginusername','pavanol')
     //await page.type('#loginpassword','test@123')
     
     const login=page.locator("button[onclick='logIn()']")
    await expect(login).toBeVisible()
    await page.click("button[onclick='logIn()']")

    
    await page.waitForTimeout(3000)

})