var {isAuthenticatedUser}=require('../middleware/auth');
const express=require('express');
var router = express.Router();
const jwt=require('jsonwebtoken');
var ObjectId= require('mongoose').Types.ObjectId;
var {isAuthenticatedUser}=require('../middleware/auth');


var {Books}= require('../models/books');



router.get('/',isAuthenticatedUser,(req,res)=>{
    Books.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',isAuthenticatedUser,(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    Books.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});


router.get('/:name/:password/:role/',(req,res)=>{
    console.log(req.params.name);
    console.log(req.params.password);
    console.log(req.params.role);
    Books.find({name:req.params.name},{name:1,password:1,role:1,_id:0},(err,doc)=>{
        console.log(doc[0]);
        if(doc[0].name===req.params.name && doc[0].password===req.params.password && doc[0].role===req.params.role){
             let payload=req.params.name
            let token=jwt.sign(payload,process.env.ACCESS_TOKEN)
           
            return res.status(200).json({token,message:'true'});
            
        }
        else{
            return res.send("false");
            
        }
    })
})




module.exports=router;