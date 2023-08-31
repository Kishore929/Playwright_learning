// const {test, expect} = require('@playwright/test');

import {test, expect, chromium} from '@playwright/test'

test('Handel pages/windows', async ()=>{
    const browser= await chromium.launch()
    const context=await browser.newContext()
    // creating new page
    const page1 = await context.newPage()
    const page2 = await context.newPage()
    const pagesall= await context.pages()
    console.log(pagesall.length)

    // by opening seperate links for each page window
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page2.goto('https://www.orangehrm.com')
})

test.only('Handel Multiple pages/windows', async ()=>{
    const browser= await chromium.launch()
    const context=await browser.newContext()
    // creating new page
    const page1 = await context.newPage()

    // by opening seperate links in a same page window by clicking link
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

   const newtab= context.waitForEvent('page') // it will create empty window in another tab before clicking link
   await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

   const newPage= await newtab;
   expect(newPage).toHaveTitle('OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM')

   await page1.waitForTimeout(3000)
   await newPage.waitForTimeout(3000)
    
   await browser.close()

})