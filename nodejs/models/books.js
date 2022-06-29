const mongoose=require('mongoose');

var Books = mongoose.model('Books',{
    name:{type:String},
    password:{type:String},
    role:{type:String},
});

module.exports={Books};