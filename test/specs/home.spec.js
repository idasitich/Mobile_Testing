import  HomeAction from '../actions/home.action.js';
import  LoginAction  from '../actions/login.action.js';

describe('Home Page', () => {
   

    it('verify homepage, scroll down/up, filter and logout', async () => {
        // Login
        await LoginAction.login('standard_user', 'secret_sauce');

        //verify homepage display filter, burger dan cart
        await HomeAction.verifyHomePage();

        await HomeAction.swipe('down');
        await HomeAction.swipe('up');

        await HomeAction.tapFilter();
        await HomeAction.tapCancelButton();

        await HomeAction.tapBurgerMenu();
        await HomeAction.tapLogout();
    });
});