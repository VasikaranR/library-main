const moongoose1= require('mongoose');

var Lend=moongoose1.model('Lend',{

    username:{
        type:String
    },
    date:{
        type:Date
    },
    bookname:{
        type:String
    },
    bookCategory:{
        type:String
    },
    bookAuthor:{
        type:String
    }
});

module.exports={Lend};