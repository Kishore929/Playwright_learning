// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Demostructure', async ({page})=>{
    
await page.goto('https://testautomationpractice.blogspot.com')
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com')
await expect(page).toHaveTitle('Automation Testing Practice')

//Input Box
await expect(await page.locator('#name')).toBeVisible()
await expect(await page.locator('#name')).toBeEmpty()
await expect(await page.locator('#name')).toBeEditable()
await expect(await page.locator('#name')).toBeEnabled()

 await page.locator('#name').fill('kishore')

 // Radio button
  await page.locator('#male').check()
    // await page.check('#male')
    await expect(await page.locator('#male')).toBeChecked()
    await expect(await page.locator('#male').isChecked()).toBeTruthy()

    // Check Box
    await page.locator('#sunday').check()
    // await page.locator('#sunday').uncheck()

    await expect(await page.locator('#sunday')).toBeChecked()
    await expect(await page.locator('#sunday').isChecked()).toBeTruthy()

    //multiple check box
        const alldays=await page.$$("//div[@class='form-group']/div[@class='form-check form-check-inline']/label")
        for(const days of alldays){
            let daytext = await days.textContent()
            // console.log(daytext)
            if(daytext.includes('Wednesday'))
            {
            await days.check();
            }
        }

await page.waitForTimeout(3000)

})