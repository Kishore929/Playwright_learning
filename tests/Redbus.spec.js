// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Autosuggestion', async ({page})=>{
    
await page.goto('https://www.redbus.in')
await expect(page).toHaveURL('https://www.redbus.in')
await expect(page).toHaveTitle('Online Bus Ticket Booking, Book AC Volvo Bus Tickets - redBus')

// FROM selecting
page.locator('#src').fill('hyderabad')
 await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")

const fromOptions = await page.$$("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")

for(const option of fromOptions){
    let value= await option.textContent()
    if(value.includes('Miyapur')){
        await option.click()
        break;
    }
}
// TO selecting
page.locator('#dest').fill('Visak')
 await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")

const toOptions = await page.$$("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")

for(const option of toOptions){
    let value= await option.textContent()
    if(value.includes('Anakapalli')){
        await option.click()
        break;
    }
}

await page.waitForTimeout(3000)

})