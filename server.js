require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()

const {routerProduct} = require('./src/product/routes/product.router')

routerProduct.use(express.urlencoded({ extended: true }))
routerProduct.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT || 3000

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
}) 

app.use('/api', routerProduct)


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))