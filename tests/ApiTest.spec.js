// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

var userid;

test('GET API', async ({request})=>{
   const response =await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('POST API', async ({request})=>{
    const response =await request.post('https://reqres.in/api/users',
                        {
                            data:{"name": "Kishore", "job": "student"},
                            headers:{"Accept":"application/json"}
                        });

    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json();
    userid = res.id;
})

test('PUT API', async ({request})=>{
    const response =await request.put('https://reqres.in/api/users/'+userid,
                        {
                            data:{"name": "Kishore", "job": "Engineer"},
                            headers:{"Accept":"application/json"}
                        });

    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test('DELETE API', async ({request})=>{
    const response=await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)

})