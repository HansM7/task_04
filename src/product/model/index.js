class Product{

    constructor(data=[]){
        this.data =data
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
            const resData=await this.data[id-1]
            if (resData) {
                const resId= Object.values(this.dataLenght[id-1]).length
                if (resId!=0) {
                    return this.data[id-1]
                }else{
                    throw Error("The register don't exist")
                }
            }else{
                throw Error("The register don't exist")
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id){
        try {
            this.data.splice(id-1,1,{})
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll(){
        try {
            if (fs.existsSync(this.file)) {
                await fs.promises.writeFile(this.file,JSON.stringify([], null, 2),'utf-8')
                return console.log("Records deleted successfully!")
            }
            else{
                throw Error("Sorry, the file don't exist")
            }
        } catch (error) {
            console.log(error)
        }
    }

}

// Instance class

const data= new Container()

// Methods

// data.save({
//     title:"Shoes",
//     price:300,
//     thumbnail:"https://cdn-icons-png.flaticon.com/512/860/860895.png"
// })

// data.getAll()

// data.getById(1) //Parameter

// data.getDeleteById(2) //Parameter

// data.deleteAll()