// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Datepicker', async ({page})=>{
    
await page.goto('https://testautomationpractice.blogspot.com')
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com')
await expect(page).toHaveTitle('Automation Testing Practice')

// direct fill the date
//await page.locator('#datepicker').fill('09/29/2001')

const date="29"
const month="September"
const year="2024"

await page.locator('#datepicker').click()
    while(true){
        const currentYear=await page.locator(".ui-datepicker-year").textContent()
        const currentMonth=await page.locator(".ui-datepicker-month").textContent()

        if(currentMonth==month && currentYear==year){
            break;
        }
        //await page.locator('.ui-icon.ui-icon-circle-triangle-w').click() // clicking previous 
        await page.locator('.ui-icon.ui-icon-circle-triangle-e').click() // clicking after 

    }
    // using loop
    /*const days=await page.$$('.ui-state-default')
    for(const day of days){
        if(await day.textContent()==date){
            await day.click()
            break;
        }
    }*/

    // without using loop for selecting date
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(3000)

})