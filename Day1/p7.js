const fs =require('fs');

const write=(data)=>{
    
    fs.writeFile("./data.txt",data , (err)=>{
        if (err)
            console.log("error writing file",err);
        else
            console.log("file written successfully");
    })

}

console.log("before writing function")

write("i am new data");

console.log("after writing the function")