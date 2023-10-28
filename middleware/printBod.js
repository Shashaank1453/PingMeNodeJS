const printBod = (req,res,next)=>{
    req.body.jwt = req.query.jwt
    next()
}
module.exports = printBod