exports.Home = class Home{

    constructor(page){
        this.page=page;
        this.productlist='//div[@id="tbodyid"]/div/div/div/h4/a';
        this.addcartbut='.btn.btn-success.btn-lg';
        this.cartbut="#cartur";
    }
    
    async addProductToCart(productName)
    {
        const productlistArray = await this.page.$$(this.productlist);
        
        for(let product of productlistArray){
            if(productName === await product.textContent()) {
                await product.click()
                break;
            }
        }
       await this.page.on('dialog', async dialog=>{
        if(dialog.message().includes('added')){
            await dialog.accept();
        }
           
        })
        await this.page.locator(this.addcartbut).click()
    }

    async gotocart(){
        await this.page.locator(this.cartbut).click()
    }
}

