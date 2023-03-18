var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var landholderSchema=mongoose.Schema({

    landholderid:{
        type: ObjectId,
        required: true,
    },   
    country:{
        type:String,
        required: true,
    },
    state:{
        type:String,
        required: true,
    },
    district:{
        type:String,
        required: true,
    },
    city:{
        type:String,
        required: true,
    },
    landmark:{
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
    landholderphoto:{
        type:String,
        required: true,
    }
})
module.exports=mongoose.model("Landholder",landholderSchema);