const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines', () => {
    test('test_3',async({page})=>{
        await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")
        //await page.click("//button[text()='Submit']")
        await expect(page.locator("//button[text()='Submit']")).toHaveText('Please fill out this field')
        await page.locator("//input[@id='name']").fill("Sindhuja")
        await page.locator("//input[@id='inputEmail4']").fill("sindhuja.pathuri4@gmail.com")
        await page.locator("//input[@id='inputPassword4']").fill("Sindhu@1234")
        await page.locator("//input[@id='company']").fill("ABC")
        await page.locator("//input[@name='website']").fill("ABC.com")
        await page.locator("//select[@name='country']").selectOption('United States')
        await page.locator("//input[@name='city']").fill("NY")
        await page.locator("//input[@name='address_line1']").fill("xyz")
        await page.locator("//input[@name='address_line2']").fill("ghy")
        await page.locator("//input[@placeholder='State']").fill("New York")
        await page.locator("//input[@name='zip']").fill("37700")
        await page.click("//button[text()='Submit']")
        const message=await expect(await page.locator("//p[@style='display: block;']")).toHaveText('Thanks for contacting us, we will get back to you shortly.')
        await console.log(message)
        page.waitForTimeout(5000)
        })
})