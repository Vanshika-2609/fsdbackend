const fs= require('fs');
//const data ="I am appended data"

fs.appendFile("./data.txt","I am appended data", (err)=>{
    if (err)
        console.log(err);
    console.log("data appended");
});
