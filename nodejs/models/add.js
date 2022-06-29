const mongoose3= require('mongoose');

var Add=mongoose3.model('Add',{

      bookId:{
        type:String
      },
      bookname:{
        type:String
      },
      category:{
        type:String
      },
      author:{
        type:String
      }
   

});

module.exports={Add};