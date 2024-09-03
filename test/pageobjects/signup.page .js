import { $ } from '@wdio/globals'

class signUp {
    async cadastrar(){
        await this.cadastro.click()
    }
    get nome(){
        return $('id:firstName')
    }
    get sobrenome(){
        return $('id:lastName')
    }
    get telefone(){
        return $('id:phone')
    }
    get email(){
        return $('id:email')
    }
    get senha(){
        return $('id:password')
    }
    get senha2(){
        return $('id:repassword')
    }
    get btnSignUp(){
        return $('id:create')
    }
    async cadastrarUsuario(nome, sobrenome, telefone, email, senha, senha2){
        await this.nome.setValue(nome)
        await this.sobrenome.setValue(sobrenome)
        await this.telefone.setValue(telefone)
        await this.email.setValue(email)
        await this.senha.setValue(senha)
        await this.senha2.setValue(senha)
        await this.btnSignUp.click()
    }
}

export default new signUp();
