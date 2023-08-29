// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Dropdowns', async ({page})=>{
    
await page.goto('https://letcode.in/dropdowns')
await expect(page).toHaveURL('https://letcode.in/dropdowns')

//dropdowns
await page.locator('#fruits').selectOption('Apple')
await page.waitForTimeout(2000)

await page.locator('#fruits').selectOption({label:'Orange'})
await page.waitForTimeout(2000)

await page.locator('#fruits').selectOption({index:1})
await page.waitForTimeout(2000)

await page.locator('#fruits').selectOption({value:'3'})
await page.waitForTimeout(2000)

await page.selectOption('#fruits','Pine Apple')
await page.waitForTimeout(2000)

// no.of options 
const options= await page.locator('#fruits option')
console.log(await options.count())
await expect(options).toHaveCount(6)

const optionArray= await page.$$('#fruits option')
console.log(await optionArray.length)
await expect(optionArray.length).toBe(6)

//checking the value
for(const option of optionArray){
    
}

await page.waitForTimeout(3000)

})