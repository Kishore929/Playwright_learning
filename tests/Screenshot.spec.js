// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Demostructure', async ({page})=>{
    
await page.goto('https://demo.opencart.com')
await expect(page).toHaveURL('https://demo.opencart.com')

//screenshot
await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Screenshot1.png'})
await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Screenshot2.png',fullPage:true})
await page.locator("//img[@title='MacBook']").screenshot({path:'tests/Screenshots/'+Date.now()+'Screenshot3.png'})
await page.waitForTimeout(3000)

})