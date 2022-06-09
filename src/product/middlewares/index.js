export const isId=(req,res,next)=>{
    const id = req.params.id
    if (typeof id === number) {
        next()
    }
}
