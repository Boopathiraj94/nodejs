const http = require("http")

 http.createServer((req,res)=>{

    console.log("request url: ",req.url)

    if(req.url == "/"){
         res.writeHead(200,{"content-type": "text/plain"})
         res.end("index page response")
    }
    else if(req.url == "/contact"){
         res.writeHead(200,{"content-type": "text/html"})
         res.end(`<h1>Contact</h1>`)
    }else if(req.url == "/about"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(`{name:"siva"}`)
    }

 })
 .listen(5000,()=>{
    console.log("server starting http://localhost:5000/")
 })