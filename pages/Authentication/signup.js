const {test, expect} = require('@playwright/test')

export 
class Signup {
    constructor(page) {
        this.page = page;  // Assign the 'page' object
        this.phone = "//div[@class='mod-input mod-login-input-phone mod-input-phone']//input[@placeholder='Enter your phone number']";
        this.name = "//input[@placeholder='First Last']";
        this.fillCode="//input[@placeholder='6 digits']"
        this.send = "//button[normalize-space()='SEND']";
        this.password = "//input[@placeholder='Minimum 6 characters with a number and a letter']";
        this.month="//span[@id='month']//span[@class='next-select-inner']"
        this.monthOpt="//li[@value='4']"
        this.day="//span[@id='day']//span[@class='next-select-inner']"
        this.dayOpt="//li[@value='9']"
        this.year="//span[@id='year']//span[@class='next-select-inner']"
        this.yearOpt="//li[@value='2001']"
        this.gender="//span[@id='gender']//span[@class='next-select-inner']"
        this.genderOpt="//li[@value='male']"
        this.check = "#enableSmsNewsletter";
        this.btn = "//button[normalize-space()='SIGN UP']";
    }

    async goToFun() {
        await this.page.goto('https://member.daraz.pk/user/register')
    }

    async signupFun(phone, name, code, password) {
        await this.page.fill(this.phone, phone)
        await this.page.fill(this.name, name)
        await this.page.fill(this.fillCode, code)
        await this.page.click(this.send)
        await this.page.fill(this.password, password)

        await this.page.click(this.month)
        await this.page.click(this.monthOpt)
        await this.page.click(this.day)
        await this.page.click(this.dayOpt)
        await this.page.click(this.year)
        await this.page.click(this.yearOpt)
        await this.page.click(this.gender)
        await this.page.click(this.genderOpt)

        await this.page.click(this.check)
        await this.page.click(this.btn)
    }
}



// this.page=page
        // this.signupBtn="//a[normalize-space()='Sign Up']"
        // this.contactInp="//input[@placeholder='Enter your phone number']"
        // this.checkbox="//div[@class='iweb-checkbox-icon iweb-checkbox-icon--box']"
        // this.sendBtn="/div[@class='iweb-button-mask']"


    // async signupFun(contactInp){
    //     await this.page.click(this.signupBtn)
    //     await this.page.locator(this.contactInp).fill(contactInp)
    //     await this.page.click(this.checkbox)
    //     await this.page.click(this.sendBtn)
    // }
