const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();

//package import
//local import
const {mongoose}=require('./db.js'); 
var bookscontroller= require('./controllers/bookscontroller.js');
var lendcontroller=require('./controllers/lendcontroller.js');
var addcontroller=require('./controllers/addcontroller.js');


var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,()=>console.log('Server started at port : 3000'));

app.use('/books',bookscontroller);
app.use('/lend',lendcontroller);
app.use('/add',addcontroller);


