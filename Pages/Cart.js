exports.Cart = 

class Cart{

    constructor(page){
        this.page=page;
       // this.productlistincart="//tbody[@id='tbodyid']/tr/td[2]"
       this.productlistincart='//tr/td[2]'
    }
   
    async checkProductInCart(productName)
    {
        const productlistArray = await this.page.$$(this.productlistincart);
        for(let product of productlistArray){
            // console.log(await product.textContent())
            if(productName === await product.textContent()) {
              return true;
            }
        }
    }
}

