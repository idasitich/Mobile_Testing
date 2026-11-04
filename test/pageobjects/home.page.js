export class HomePage{
    get filterButton(){
        return 'android=new UiSelector().className("android.widget.ImageView").instance(5)'
    }
    get burgerMenuButton(){
        return 'android=new UiSelector().className("android.widget.ImageView").instance(1)'
    }
    get addToCartButton(){
        return 'android=new UiSelector().text("ADD TO CART").instance(0)'
    }
    get cancelButton(){
        return 'android=new UiSelector().text("Cancel")'
    }
    get logoutButton(){
        return 'android=new UiSelector().text("LOGOUT")'
    }
    
}

export default new HomePage()