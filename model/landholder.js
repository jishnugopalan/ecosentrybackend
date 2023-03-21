var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var landholderSchema=mongoose.Schema({

    userid:{
        type: ObjectId,
        required: true,
    },   
    
    district:{
        type:String,
        required: true,
    },
    place:{
        type:String,
        required: true,
    },
    
    housename:{
        type:String,
        required: true,
    },
    pincode:{
        type:Number,
        required: true,
    },
    
})
module.exports=mongoose.model("Landholder",landholderSchema);