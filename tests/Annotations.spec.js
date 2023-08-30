// const {test, expect} = require('@playwright/test');

import {test, expect, chromium} from '@playwright/test'

test('Skiping', async ({page,browserName})=>{
    
    if(browserName==='chromium'){
        test.skip()
    }
})

test('Fixme', async ({page,browserName})=>{
    test.fixme()
    console.log("fixmetest")
})

/*test('Fail', async ({page,browserName})=>{
    test.fail() // expecting
    console.log("failed test")
    expect(1).toBe(1) // actual
})// so the test will fail */

test('Fail1', async ({page,browserName})=>{
    test.fail() // expecting
    console.log("failed test")
    expect(1).toBe(2) // actual
})// so the test will pass

/*test('Fail2', async ({page,browserName})=>{
    
    if(browserName==='chromium'){
        test.fail() // exp the test will be fail
    }
})*/

test('Fail3', async ({page,browserName})=>{
    
    if(browserName==='Firefox'){
        test.fail() // exp the test will be fail
    }
})

test('Slow', async ({page,browserName})=>{
     test.slow();
    // test.setTimeout(5000)
    page.goto('https://letcode.in/advancedtable')
})