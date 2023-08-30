// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Upload files', async ({page})=>{
    
await page.goto('https://www.foundit.in/#')
await expect(page).toHaveURL('https://www.foundit.in/#')

await page.locator('.mqfihd-upload').click()
await page.locator('#file-upload').setInputFiles('tests/Files/DL Kishore.pdf')

//multiple files upload

await page.goto('https://www.davidwalsh.name/demo/multiple-file-upload.php')
await page.locator('#filesToUpload').setInputFiles(['tests/Files/icet reg app form.pdf','tests/Files/icet reg form.pdf'])
await page.waitForTimeout(3000)

//removing the uploded files by giving empty path file
await page.locator('#filesToUpload').setInputFiles([])

await page.waitForTimeout(3000)

})