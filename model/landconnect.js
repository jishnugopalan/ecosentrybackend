var mongoose = require("mongoose");
const {ObjectId}=require("mongodb")
var landConnectSchema=mongoose.Schema({
    land:{
        type:ObjectId,
        ref:"land"
    },
    user:{
        type:ObjectId,
        ref:"user"
    },
    status:{
        type:String,
        default:"request sent"
    },
    timestamp:{
        type:String,
        default:Date.now
    }

})
module.exports=mongoose.model("LandConnect",landConnectSchema);
