import { time } from 'console'

const {test, expect} = require('@playwright/test')

export 
class Login {
    constructor(page) {
        this.page = page
        this.phone="//input[@placeholder='Please enter your Phone Number or Email']"
        this.password="//input[@placeholder='Please enter your password']"
        this.lginBtn="//button[normalize-space()='LOGIN']"
    }

    async LoginFun(phone, password){
        await this.page.fill(this.phone,phone)
        await this.page.fill(this.password, password)
        await this.page.waitForSelector(this.lginBtn)
        await this.page.click(this.lginBtn)
    }
    async LoginFun1(){
        await this.page.waitForSelector(this.lginBtn)
        await this.page.click(this.lginBtn)
    }
}