const fs= require('fs');

fs.unlink("./data.txt",(err)=>{
    if (err)
        console.log("err",err)
    console.log("file deleted successfully");
})