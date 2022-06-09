import {Product} from '../model/'

const product=new Product()

exports.getAll=async (req, res)=>{
    const allData = await product.getAll()
    res.json(allData)
    console.log(allData);
}

exports.getById=async (req, res)=>{
    const id = req.params.id
    const dataId = await product.getById(id)
    res.json(dataId)
    console.log(dataId);
}