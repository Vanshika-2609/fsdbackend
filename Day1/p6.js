const fs =require('fs');

const read=()=>{
    const data=fs.readFileSync("./data.txt","utf-8")
    console.log(data);
}

console.log("before reading function")

read();

console.log("after reading the function")
//synchronised
