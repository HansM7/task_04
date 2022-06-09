import { express } from "express";
import { Product } from "../model/"
import { isId } from "../middlewares/"
import { getAll,getById } from "../controllers/"

const product = new Product()

const router = express.Router()

router.get('/producto', getAll(req,res))

router.get('/producto/:id', isId(req,res,next), getById(req,res))

module.exports = {
    routerProducto:router
}