const express= require('express');
var router=express.Router();

var ObjectId=require('mongoose').Types.ObjectId;

var{Add}=require('../models/add');

router.get('/',(req,res)=>{
    Add.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});


router.post('/',(req,res)=>{
    // console.log(res.body.bookId);
    var add = new Add({
        bookId:req.body.bookId,
        bookname:req.body.bookname,
        category:req.body.category,
        author:req.body.author
    });

    add.save((err,doc)=>{
        if(!err){
            console.log('add entered ');
            res.send(doc);
        }
        else{
            console.log("error in saving the "+JSON.stringify(err,undefined,2));
        }
    })

   

});

router.get( '/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id `);
    Add.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});


router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    var add={
        bookId:req.body.bookId,
        bookname:req.body.bookname,
        category:req.body.category,
        author:req.body.author
    };  
    console.log("event",add);
    Add.findByIdAndUpdate(req.params.id,{$set:add},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save put event : '+ JSON.stringify(err,undefined,2));}
    });
});


router.delete('/:id' ,(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);

        Add.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err)
            res.send(data);
        else
            console.log('Error in Deleting Data : '+JSON.stringify(err,undefined,2));
    });
});
module.exports=router;