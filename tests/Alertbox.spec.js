// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Alertbox', async ({page})=>{
    
await page.goto('https://testautomationpractice.blogspot.com')
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com')

// Enabling diallog window handler
page.on('dialog', async dialog=>{

expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept()
})

await page.locator("button[onclick='myFunctionAlert()']").click()
await page.waitForTimeout(3000)

})

test('confirm', async ({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com')
    
    // Enabling diallog window handler
    page.on('dialog', async dialog=>{

    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept() // close by using OK button
    // await dialog.dismiss() // close by using CANCEL button
    })

    await page.locator("button[onclick='myFunctionConfirm()']").click()
    await page.waitForTimeout(3000)
    
    })

    test('prompt', async ({page})=>{
    
        await page.goto('https://testautomationpractice.blogspot.com')
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com')
        
        // Enabling diallog window handler
        page.on('dialog', async dialog=>{
        
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('kishore') //passing the value into input box which is in promptbox
        })

        await page.locator("button[onclick='myFunctionPrompt()']").click()
        await page.waitForTimeout(3000)
        
        })