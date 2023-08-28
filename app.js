const express=require("express")
const router = require("./Src/Routes/api")
const app=new express()
app.use("/api/v1",router)


//Undefined Route
app.use("*",(req,res)=>{
    res.status(404).json({status:"Fail",Data:"Not Found"})
})




//Security MiddleWare import
const rateLimit=require("express-rate-limit")
const helmet=require("helmet")
const mongoSanitize=require("express-mongo-sanitize")
const xss=require("xss-clean")
const hpp=require("hpp")
const cors=require("cors")

//Security MiddleWare implements
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

//Request Rate Limit
const limiter=rateLimit({windowMS:15*60*1000, //15minute
        max:100  //limit each ip to 100 request per window
})
app.use(limiter)


module.exports=app