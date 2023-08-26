const express=require("express")
const router=express.Router()
const FirstController="../Controllers/FirstController"


//This is my first get route
// router.get("/helloGet",FirstController.Hello)
router.post("/helloPost",FirstController.Hello)

module.exports=router
