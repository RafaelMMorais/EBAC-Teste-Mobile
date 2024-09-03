import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import signUp from '../pageobjects/signup.page .js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //Fazer login e validar
        await homePage.openMenu('profile') // Abrir menu perfil para fazer login
        //await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgK08EaYJQ')
        await loginPage.login('clienteebac@ebac.com.br', 'ebac123') // Fazer login
        await homePage.openMenu('profile') // Abrir menu de perfil 
        //expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
        expect((await profilePage.ProfileName('Cliente EBAC')).isDisplayed()).toBeTruthy() // Procurar texto especifico 
        //await driver.pause(10000) <--- Esperar x segundos
    })

    it.only('deve cadastrar', async () => {
        await homePage.openMenu('profile')
        await loginPage.cadastrar()
        await signUp.cadastrarUsuario('Arthur', 'Morgan', '01234567', 'arthur@morgan.com', 'mary123', 'mary123')
        await homePage.openMenu('profile')
        expect((await profilePage.ProfileName('Morgan Arthur')).isDisplayed()).toBeTruthy()
    })
})

