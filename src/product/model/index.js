class Product{

    constructor(data=[]){
        this.data =data
    }

    async save(product){
        try {
            const id = this.data.length+1
            const newProduct={}

            newProduct.id=id
            newProduct.title=product.title
            newProduct.price=product.price
            newProduct.thumbnail=product.thumbnail

            this.data.push(newProduct)

            return newProduct

        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try{
            return this.data
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id){
        try {
            const resData=await this.data[id]
            if (resData) {
                const resId= Object.values(this.data[id]).length
                if (resId!=0) {
                    return this.data[id]
                }else{
                    return {message: "El registro no existe"}
                }
            }else{
                return {message: "El registro no existe"}
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id){
        try {
            this.data.splice(id,1,{})
        } catch (error) {
            console.log(error)
        }
    }

    async editOne(product, id){
        try {
            this.data[id].title = await product.title
            this.data[id].price = await product.price
            this.data[id].thumbnail = await product.thumbnail
            return this.data[id]
            
        }catch (error) {
            console.log(error)
        }
    }

    

}

module.exports=Product