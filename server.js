import 'dotenv/config'

import {express} from "express"
import {path} from "path"
import routerProducto from "./src/product/routes"

const __dirname = path.resolve()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'))
}) 

// Define the port of execution
const port = process.env.PORT || 3000


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))