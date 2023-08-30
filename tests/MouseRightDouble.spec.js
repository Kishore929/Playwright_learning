// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Mousehover', async ({page})=>{
    
await page.goto('https://www.flipkart.com')
await expect(page).toHaveURL('https://www.flipkart.com')


const electronics = await page.locator("img[alt='Electronics']")
const games = await page.locator("._6WOcW9._2-k99T")

await electronics.hover()
await games.hover()

await page.waitForTimeout(3000)

})

test('Doubleclick', async ({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com')
    
    const doubleclick = await page.locator("button[ondblclick='myFunction1()']")
    
    await doubleclick.dblclick();
    
    await page.waitForTimeout(3000)
    
    })

    test('Rightclick', async ({page})=>{
    
        await page.goto('https://testautomationpractice.blogspot.com')
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com')
        
        const doubleclick = await page.locator("button[ondblclick='myFunction1()']")
        
        await doubleclick.click({button:"right"});
        
        await page.waitForTimeout(3000)
        
        })