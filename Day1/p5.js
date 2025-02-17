const fs =require('fs');

const read=()=>{
    fs.readFile("./data.txt","utf-8",(err,data)=>{
        if(err)
            console.log(err);
        else
            console.log(data);
    })
   
}

console.log("before reading function")

read();

console.log("after reading the function")

///asynchronous function therefore function do not block the code in between
///it completes the whole code then reads the file
///when we use .readFileSync then it will do synchronous reading 