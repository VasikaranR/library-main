const mongoose=require('mongoose');

var Books = mongoose.model('login',{
    name:{type:String},
    password:{type:String},
    role:{type:String},
});

module.exports={Books};