const express = require('express');
var router = express.Router();

var ObjectId=require('mongoose').Types.ObjectId;

var{Lend}=require('../models/lend');

router.get('/',(req,res)=>{
    Lend.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var lend = new Lend({
        username:req.body.username,
        date:req.body.date,
        bookname:req.body.bookname,
        bookCategory:req.body.bookCategory,
        bookAuthor:req.body.bookAuthor
    });

    lend.save((err,doc)=>{
        if(!err){
            console.log('hello');
            res.send(doc);
        }
        else{
            console.log('error in save : '+ JSON.stringify(err,undefined,2));
        }
    });

});


router.put('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no record :${req.params.id}`);
    var lend ={
        username:req.body.username,
        date:req.body.date,
        bookname:req.body.bookname,
        bookCategory:req.body.bookCategory,
        bookAuthor:req.body.bookAuthor
    };
    console.log(lend);
    Lend.findByIdAndUpdate(req.params.id,{$set:lend},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save put event : '+JSON.stringify(err,undefined,2))};
    })

});

module.exports=router;



