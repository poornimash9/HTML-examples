var url = require('url');
var express=require("express")
var app=express()
var bodyParser=require("body-parser")


const PORT=8082; 
app.listen(PORT)
app.use(bodyParser.urlencoded({extended:false,limit:'50mb'}))

app.get('/user/login',function(req,res){
    res.send("Success")
})