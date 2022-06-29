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
module.exports=router;