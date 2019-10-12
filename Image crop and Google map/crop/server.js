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
    res.sendFile(__dirname+"/cropimage.html")
})

app.get('/crop.html',function(req,res){
    res.sendFile(__dirname+"/crop.html")

})

app.post('/file',function(req,res){
    var image=req.body.image.replace(/^data:image\/png;base64,/, "");
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    fs.writeFile(query.fname, image, 'base64', function(err) {
        console.log('File created');
    });
    conn.query("INSERT INTO c_temp_files(path,name,size,type) VALUES('/var/www/html/github_local/c-on/c-on/chaitra/COURSE/imagecropping/"+query.fname+"','"+query.fname+"','+"+query.size+"','"+query.type+"')",function(error,result){
        if(error) throw error
        console.log("image inserted")
    })
    res.send(true)
})
