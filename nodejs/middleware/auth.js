const jwt= require('jsonwebtoken')
require('dotenv').config();
const books =require('../models/books')

exports.isAuthenticatedUser = async( req,res,next)=>{
    if(!req.headers.authorization){
        return res.send(401).send("Access denied ,please login")
    }
    const token =req.headers.authorization.split(' ')[1]
    
    if(token==='null'){
        return res.status(401).send("access denied , please login")
    }
    const data=jwt.verify(token,process.env.ACCESS_TOKEN)
    if(!data){
        return res.status(401).send("access denied ,Please login")
    }
    

    req.name=data.name
    next()
}