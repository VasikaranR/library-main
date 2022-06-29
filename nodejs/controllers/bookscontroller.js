const express=require('express');
var router = express.Router();

var ObjectId= require('mongoose').Types.ObjectId;

var {Books}= require('../models/books');

//localhost3000/books/

router.get('/',(req,res)=>{
    Books.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    Books.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});


router.get('/:name/:password/:role',(req,res)=>{
    console.log(req.params.name);
    console.log(req.params.password);
    console.log(req.params.role);

    Books.find({name:req.params.name},{name:1,password:1,role:1,_id:0},(err,doc)=>{
        if(doc[0].name===req.params.name && doc[0].password===req.params.password && doc[0].role===req.params.role){
            res.send("true");
            console.log("true");
        }
        else{
            res.send("false");
            console.log("false");
        }
    })
})


router.post('/',(req,res)=>{
    var bok=new Books({
        name:req.body.name,
        password:req.body.password,
        role:req.body.role
    });
 bok.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
    });
});

module.exports=router;