import { $ } from '@wdio/globals'

class addCart {
    get barra(){
        return $('~, Search Products')
    }
    get item(){
        return $('android=new UiSelector().text("Search Products")')
    }

    async addC(){
        await this.barra.click()
        await this.item.setValue(item)
    }
}

export default new addCart();
