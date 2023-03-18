var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var landSchema=mongoose.Schema({

    landholderid:{
        type: ObjectId,
        required: true,
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