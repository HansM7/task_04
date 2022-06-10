const Product = require('../model/index')

const product=new Product()

exports.getAllController=async (req,res)=>{
    const allData = await product.getAll()
    res.json(allData)
}
    
exports.getByIdController= async (req, res)=>{
    const dataId = await product.getById(req.params.id-1)
    res.json(dataId)
}

exports.registerController= async (req, res)=>{
    const register = await product.save(req.body)
    res.json(register.id)
}

exports.editController= async (req, res)=>{
    const edit= await product.editOne(req.body, req.params.id-1)
    res.json(edit)
}

exports.deleteOneController= async (req, res)=>{
    await product.deleteById(req.params.id-1)
    res.json({
        message: 'Registro eliminado con exito!'
    })
}
