const express=require("express")
const tutionModel=require("../Models/TutionModel")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let tution=new tutionModel(data)
    let result=await tution.save()
    res.json({
        status:"success"
    })
})

module.exports=router