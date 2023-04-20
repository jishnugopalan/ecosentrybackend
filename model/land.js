var mongoose = require("mongoose");
const {ObjectId}=require("mongodb")
var landSchema=mongoose.Schema({

    user:{
        type: ObjectId,
        required: true,
        ref:"User"
    },   
    landcountry:{
        type:String,
        required: true,
    },
    landstate:{
        type:String,
        required: true,
    },
    landdistrict:{
        type:String,
        required: true,
    },
    landcity:{
        type:String,
        required: true,
    },
    landlandmark:{
        type:String,
        required: true,
    },
    landpincode:{
        type:Number,
        required: true,
    },
    landphoto:{
        type:String,
        required: true,
    },
    squarefeet:{
        type:Number,
        required: true,
    },
    soiltype:{
        type:String,
        required: true,
    },
    water:{
        type:String,
        required: true,
    }
})
module.exports=mongoose.model("Land",landSchema);