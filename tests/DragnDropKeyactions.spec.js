// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test.skip('DragnDrop', async ({page})=>{
    
await page.goto('https://letcode.in/dropable')
await expect(page).toHaveURL('https://letcode.in/dropable')

const source=await page.locator('#draggable')
const destination= await page.locator('#droppable')

    /*source.hover()
    page.mouse.down()
    destination.hover()
    page.mouse.up()*/
// one line of code
await source.dragTo(destination)

//Keyboard actions

await page.waitForTimeout(3000)

})

test('Keyboard', async ({page})=>{
    
    await page.goto('https://gotranscript.com/text-compare')
    await expect(page).toHaveURL('https://gotranscript.com/text-compare')
    
    //textarea[@placeholder='Paste one version of the text here.']

    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill('Welcome to Automation')
    //Keyboard actions
    //ctrl+A
   await page.keyboard.press('Control+A')
    //ctrl+c
    await page.keyboard.press('Control+c')
    //TAB
   await page.keyboard.down('Tab')
   await page.keyboard.up('Tab')
    //ctrl+v
    await page.keyboard.press('Control+v')
    
    await page.waitForTimeout(3000)
    
    })