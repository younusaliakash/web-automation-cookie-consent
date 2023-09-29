import puppeteer from "puppeteer";

const browser =  await puppeteer.launch({headless : false},);
const page =await browser.newPage();

await page.goto("https://www.cookieserve.com/", { waitUntil : 'networkidle0'})
const acceptBtn = await page.$('.cky-btn-accept')
if(acceptBtn) {
    await acceptBtn.click();
}
await page.screenshot({path: './data/cookie-consent.png'});

await page.close();
await browser.close()