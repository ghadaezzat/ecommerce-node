const express = require('express')
const bodyParser = require('body-parser')

const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const cors =require('cors')

var app = express();
mongoose.connect(config.database,{useUnifiedTopology: true,
    useNewUrlParser: true},(err)=>{
    if(err){
        console.log("connection error "+err)
    }else{
        console.log("connected successfully to database")
    }
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors())
 app.get('/',(req,res,next)=>{
  res.json({user:"ghada ezzat"})   
 }
 )
app.listen(config.port,(err)=>{console.log("magic happens on port awesome "+config.port)});
module.exports=app