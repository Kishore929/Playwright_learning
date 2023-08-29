// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Demostructure', async ({page})=>{
    
await page.goto('https://www.demoblaze.com/index.html')
await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
await expect(page).toHaveTitle('STORE')

await page.waitForTimeout(3000)

})