const express = require("express")
const {isId,register} = require("../middlewares/")
const {getAllController, getByIdController, registerController, editController, deleteOneController} = require("../controllers/product.controller")

const router = express.Router()

router.get('/productos', getAllController)

router.get('/productos/:id', isId, getByIdController)

router.post('/productos/', register, registerController)

router.put('/productos/:id', isId, register, editController)

router.delete('/productos/:id', isId, deleteOneController)

module.exports={
    routerProduct: router
}