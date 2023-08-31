const mongoose=require("mongoose")
const dataSchema=mongoose.Schema({
    Name:String,
    Roll:String,
    Class:String,
    Remarks:String
})
const studentsModel=mongoose.model("School",dataSchema)
module.exports=studentsModel