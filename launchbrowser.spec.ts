
import{test,chromium} from "@playwright/test"

test('Test to launch in edge', async () => {
    const browser=await chromium.launch({channel:"msedge", headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto(`https://www.redbus.in`)
    console.log("Page title:", await page.title())
    console.log("Page.URL:", page.url())
})

test('Test to launch in edge browser', async () => {
    const browser=await chromium.launch({channel:"msedge", headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto(`https://www.flipkart.com`)
    //waitforpa
    console.log("Page title:", await page.title())
    console.log("Page.URL:", page.url())
})