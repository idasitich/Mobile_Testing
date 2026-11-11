import { expect } from '@wdio/globals'
import loginAction from '../actions/login.action.js'
import AppHelper from '../../utilities/helpers/app.helper.js'
import credentials from '../test-data/credentials.js'
import fs from 'node:fs';


describe('Swag Labs App', () => {

    // Menjalankan aplikasi sebelum setiap test case
beforeEach(async function () {
    await AppHelper.launch()
});

// Mengambil screenshot jika test case gagal
afterEach(async function () {

    if (this.currentTest?.state === "failed") {
        const screenshot = await browser.takeScreenshot();
        fs.mkdirSync("./reports/screenshots", {
            recursive: true
        });
        fs.writeFileSync(
            `./reports/screenshots/${this.currentTest.title}.png`,
            screenshot,
            "base64"
        );
    }
});

// Menutup aplikasi setelah seluruh test case selesai
after(async function () {
    await AppHelper.close();
});

    it('should login successfully with standard user', async () => {
        const isLoginPage = await loginAction.isOnLoginPage()
        await expect(isLoginPage).toBe(true)
        await loginAction.login(credentials.standard_user.username,credentials.standard_user.password)
        const isProductsVisible = await loginAction.waitForProducts()
        await expect(isProductsVisible).toBe(true)
    })
    it('Negative Test: should not login with locked user', async () => {
        const isLoginPage = await loginAction.isOnLoginPage()
        await expect(isLoginPage).toBe(true)
        await loginAction.login(credentials.locked_user.username,credentials.locked_user.password)
        const isProductsVisible = await loginAction.waitForProducts()
        await expect(isProductsVisible).toBe(true)
    })
})
