const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello world!');
})

server.listen(9000,(err)=>{
    if(err)
        console.log("error starting server",err)
    else    
        console.log("server started on port 9000")
})