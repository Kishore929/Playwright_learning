exports.Login = 

class Login{

    constructor(page){
        this.page=page;
        this.loginlink='#login2';
        this.usernameinput='#loginusername';
        this.passwordinput='#loginpassword';
        this.loginbut="button[onclick='logIn()']";
    }
    async gotoLoginpage(){

        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async clickLogin(username, password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameinput).fill(username);
        await this.page.locator(this.passwordinput).fill(password);
        await this.page.locator(this.loginbut).click();
    }
}

