var fs = require('fs');
var url = require('url');
var express=require("express")
var app=express()
var bodyParser=require("body-parser")
var mysql=require("mysql");

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"carmel"
})

const PORT=8082; 
app.listen(PORT)
app.use(bodyParser.urlencoded({extended:false,limit:'50mb'}))

app.get('/',function(req,res){
    res.sendFile(__dirname+"/searchMap.html")
})

app.get('/crop.html',function(req,res){
    res.sendFile(__dirname+"/crop.html")

})

app.post('/address',function(req,res){
    var query=url.parse(req.url,true)
    conn.query("INSERT INTO c_temp_address(stateplaceid,stateName,cityplaceid,cityName,address) VALUES('/var/www/html/github_local/c-on/c-on/chaitra/COURSE/imagecropping/"+query.stateplaceid+"','"+query.stateName+"','+"+query.cityplaceid+"','"+query.cityName+"','+"+query.address+"')",function(error,result){
        if(error) throw error
        console.log("address inserted")
    })
    res.send(true)
})