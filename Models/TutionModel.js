const mongoose = require("mongoose")

const tutionSchema = new mongoose.Schema(
    {
        centername:String,
        phno:String,
        address:String,
        email:String
    }
)

module.exports=mongoose.model("tution",tutionSchema)
