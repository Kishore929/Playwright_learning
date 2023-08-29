// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Table', async ({page})=>{
    
await page.goto('https://letcode.in/table')
await expect(page).toHaveURL('https://letcode.in/table')

//Table 1
const table1= await page.locator('#shopping')
//no of rows and columns
const columns1= table1.locator('thead tr th')
console.log(await columns1.count())

const rows1=table1.locator('tbody tr')
console.log(await rows1.count())

await expect(columns1).toHaveCount(2)
 expect(await columns1.count()).toBe(2)

 await expect(rows1).toHaveCount(4)
 expect(await rows1.count()).toBe(4)

 //getting the table details table1
 for(let i=0;i< await rows1.count();i++){
    let row= rows1.nth(i)
     let tds = row.locator('td')
     for(let j=0;j<await tds.count();j++){
        console.log( await tds.nth(j).textContent())
     }
  }

 //Table 2
 const table2= await page.locator('#simpletable')
//no of rows and columns
const columns2= table2.locator('thead tr th')
console.log(await columns2.count())

const rows2=table2.locator('tbody tr')
console.log(await rows2.count())

await expect(columns2).toHaveCount(4)
 expect(await columns2.count()).toBe(4)

 await expect(rows2).toHaveCount(3)
 expect(await rows2.count()).toBe(3)

// selecting checkboxes in the table
 await selectcheckbox(rows2, page, 'Koushik')
 await selectcheckbox(rows2, page, 'Iron')
  

  //getting the table details table2
  for(let i=0;i< await rows2.count();i++){
    let row= rows2.nth(i)
     let tds = row.locator('td')
     for(let j=0;j<await tds.count()-1;j++){
        console.log( await tds.nth(j).textContent())
     }
  }

await page.waitForTimeout(3000)

})
    async function selectcheckbox(rows2, page, name){
        //filter the row
        const matchedrow= rows2.filter({
            has: page.locator('td'),
             hasText: name
        })
        await matchedrow.locator('input').check()
    }



test.only('AdvancedTable', async ({page})=>{
    
await page.goto('https://letcode.in/advancedtable')
await expect(page).toHaveURL('https://letcode.in/advancedtable')

const table3= await page.locator('#advancedtable')
//no of rows and columns
const columns3= table3.locator('thead tr th')
console.log(await columns3.count())

const rows3=table3.locator('tbody tr')
console.log(await rows3.count())

await expect(columns3).toHaveCount(4)
 expect(await columns3.count()).toBe(4)

 await expect(rows3).toHaveCount(5)
 expect(await rows3.count()).toBe(5)

// Read data from all the pages in the table
    const pages = await page.locator('span a')
    const num = await pages.count()
    console.log(num)
    for(let p=0;p<num;p++){
        if(p>0){
            await pages.nth(p).click()
        }

        for(let i=0;i< await rows3.count();i++){
            let row= rows3.nth(i)
             let tds = row.locator('td')
             for(let j=0;j<await tds.count()-1;j++){
                console.log( await tds.nth(j).textContent())
             }
          }
    }
    await page.waitForTimeout(3000)

})
    