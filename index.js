const app=require("./app")
const express = require('express');
// const app = express();
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})


app.listen(7000,function(){
    console.log("Run success")
})

// //For Environment variable
// app.listen(process.env.RUNNING_PORT,function(){
//          console.log("Run success")
//     })




// Your route and middleware setup here

const PORT = process.env.RUNNING_PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
