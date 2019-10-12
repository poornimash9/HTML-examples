var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring=require('querystring')

const PORT=8081; 
var chunk;

http.createServer(function(request,response){
    var p=url.parse(request.url).pathname;
    console.log(p);
    // fs.readFile('cropimage.html',function(err,data){
    //     if(err) throw err;
    //     response.end(data)
    // })
    if(request.method==="GET"){
        if(p==="/f/cropimage.html"){
            fs.readFile('cropimage.html','utf-8',function(err,html){
             response.end(html);
            })
        }else if(p==="/f/crop.html"){
             fs.readFile('crop.html',function(err,html){
                 if(err) throw err;
                   var q=url.parse(request.url).query;
                
                //  q=q.replace('p=blob:http://localhost:8081/','');
                //  q=q.replace('p=','');
                   console.log("after",q)
                //    var buf=new Buffer();
                //    buf.write(q);
                // //   q=new Buffer();
                // //   fs.createWriteStream("1.png").write(q);
                // // var imageBuffer = request.file.buffer;
                // var imageName = 'map.png';

                // fs.writeFile(imageName,q,'binary',function(err,data){
                //     if(err) throw err;
                //     console.log("hello")
                // })
                 response.writeHeader(200, {"Content-Type": "text/html"}); 
                 response.write("<img src="+q['para1']+">")
                 response.end(html);
             })   
        }
    }else{
        console.log("not post")
    }
   
   
}).listen(PORT)