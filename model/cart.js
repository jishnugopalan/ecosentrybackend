var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var cartSchema=mongoose.Schema({
    productid:{
        type:ObjectId,
        ref:"products"
    },
    userid:{
        type:ObjectId,
        ref:'user'
    },
    qty:{
        type:Number
    }
})
module.exports=mongoose.model("Customer",cartSchema)