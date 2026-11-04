import  HomePage  from "../pageobjects/home.page.js";

export class HomeAction{
async verifyHomePage(){
    const filterButton = $(HomePage.filterButton);
    const burgerMenuButton = $(HomePage.burgerMenuButton);
    const addToCartButton = $(HomePage.addToCartButton);

    await filterButton.waitForExist({ timeout: 5000 });
    await burgerMenuButton.waitForExist({ timeout: 5000 });
    await addToCartButton.waitForExist({ timeout: 5000 });

    const filterDisplayed = await filterButton.isDisplayed();
    const burgerDisplayed = await burgerMenuButton.isDisplayed();
    const cartDisplayed = await addToCartButton.isDisplayed();

    return filterDisplayed && burgerDisplayed && cartDisplayed;
}
    //membuat function untuk tap

   async tapBurgerMenu(){
        const burgerMenuButton = $(HomePage.burgerMenuButton)
        await burgerMenuButton.click()
    }
    async tapLogout(){
        const logoutButton = $(HomePage.logoutButton)
        await logoutButton.click()
    }
    async tapFilter(){
        const filterButton = $(HomePage.filterButton)
        await filterButton.click()
    }
    async tapCancelButton(){
        const cancelButton = $(HomePage.cancelButton)
        await cancelButton.click()
    }

    async scroll() {
        // scroll down
        await driver.touchAction([
            { action: 'press', x: 500, y: 1500},
            { action: 'moveTo', x: 500, y: 500},
            'release'
        ]);

        // scroll up
        await driver.touchAction([
            { action: 'press', x: 500, y: 500},
            { action: 'moveTo', x: 1500, y: 500},
            'release'
        ]);
    }

    async scrollToElement(selector, maxSwipes = 10) {
        for (let i = 0; i < maxSwipes; i++) {
            const element = await $(selector);
            const isDisplayed = await element.isDisplayed();
            if (isDisplayed) return true;

            await this.scroll('up');
        }
        return false;
    }

        async swipe(direction = 'down') {
        const { height, width } = await driver.getWindowSize();
        const startY = direction === 'down' ? height * 0.8 : height * 0.2;
        const endY = direction === 'down' ? height * 0.2 : height * 0.8;

        await driver.performActions([
            {
                type: 'pointer',
                id: 'pointer1',
                actions: [
                    { type: 'pointerMove', x: width / 2, y: startY, duration: 100 },
                    { type: 'pointerDown', duration: 100 },
                    { type: 'pointerMove', x: width / 2, y: endY, duration: 500 },
                    { type: 'pointerUp', duration: 100 }
                ]
            }
        ]);
    }
}

export default new HomeAction()