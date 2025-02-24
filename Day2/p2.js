const http= require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`<h1 style='background-color: red; color:white'>Welcome to backend</h1>`);
});

server.listen(9000,(err)=>{
    if(err)
        console.log("error starting server")
    else
        console.log("server started on port 9000")
})