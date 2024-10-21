const { test, expect } = require('@playwright/test');
const { Signup } = require('../pages/Authentication/signup');
const { Login } = require('../pages/Authentication/login');

// test.describe.skip('Signup Test Cases', () => {
//     test.beforeEach(async ({ page }) => {
//         const obj1 = new Signup(page)
//         await obj1.goToFun();
//     })

//     test('Signup Fail! Invalid Code', async ({ page }) => {
//         const obj = new Signup(page)
//         await obj.signupFun('03481631159', 'name', '1234', 'Aaqib@0585')
//     })
// })

test.describe('Login Test Cases',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://member.daraz.pk/user/login')
    })

    test('Failed Login! wrong Phone no', async({page})=>{
        const obj=new Login(page)
        await obj.LoginFun('0434873444','Password@1234')
    })

    test('Failed Login! wrong Password', async({page})=>{
        const obj=new Login(page)
        await obj.LoginFun('03481631159','newpass@123')
    })

    test.only('Failed Login! Both inputs wrong', async ({ page }) => {
        const obj = new Login(page);
        await obj.LoginFun('84932', '42389jj');
    })

    test('Failed Login! Without Entering Credentials', async({page})=>{
        const obj=new Login(page)
        await obj.LoginFun1()
    })
})
