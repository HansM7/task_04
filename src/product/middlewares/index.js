const isId=(req,res,next)=>{
    const id = req.params.id
    if (isNaN(id)!=true) {
        next()
    }else{
        res.json({
            message:"Formato indefinido"
        })
    }
}

const register = (req, res, next)=>{
    const {title,price,thumbnail} = req.body
    if (title!=undefined && price!=undefined && thumbnail!=undefined) {
        if (isNaN(title)===true && isNaN(thumbnail) ===true && isNaN(price)!=true) {
            next()
        }else{
            res.json({
                message:"Formatos no identidicados"
            })
        }
    }else{
        res.json({
            message:"Campos incompletos"
        })
    }
}

module.exports= {
    isId,
    register
}
