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


/*
const date="5"
const yearmonth="Sep"+"2023"

await page.locator('.dateText').click()
    while(true){

        const currentYearmonth=await page.locator("//div[@class='DayNavigator__CalendarHeader-qj8jdz-1 fxvMrr']/div[2]").textContent()
        

        if(currentYearmonth==yearmonth){
            break;
        }
        //await page.locator('.ui-icon.ui-icon-circle-triangle-w').click() // clicking previous 
        await page.locator('.DayNavigator__IconBlock-qj8jdz-2 iZpveD').click() // clicking after 

    }
    // using loop
    
    
    /*const days=await page.$$('.ui-state-default')
    for(const day of days){
        if(await day.textContent()==date){
            await day.click()
            break;
        }
    }*

    // without using loop for selecting date
    await page.click(`//span[@class='DayTiles__CalendarDaysSpan'][text()='${date}']`) 
*/

await page.waitForTimeout(3000)

})