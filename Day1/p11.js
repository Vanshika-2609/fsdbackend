const fs =require('fs');

const write=(data)=>{
    
    fs.writeFile("./mydir/data.txt",data , (err)=>{
        if (err)
            console.log("error writing file",err);
        else
            console.log("file written successfully");
    })

}



write("i am new data");

