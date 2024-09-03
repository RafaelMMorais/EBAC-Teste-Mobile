import { $ } from '@wdio/globals'

class LoginPage {
    get email(){
        return $('id:email') //Buscar por ID
    }
    get password(){
        return $('android=new UiSelector().text("Password")') //Buscar pelo texto do elemento
    }
    get btnLogin(){
        return $('~Login') //Buscar pelo accessibilityId
    }
    get cadastro(){
        return $('android=new UiSelector().text("Sign up")')
    }
    async login(email, password){
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.btnLogin.click()
    }
    async cadastrar(){
        await this.cadastro.click()
    }
}

export default new LoginPage();
