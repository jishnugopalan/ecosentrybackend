var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var OrderSchema=mongoose.Schema({
    productid:{
        type:ObjectId,
        ref:'products'
    },
    userid:{
        type:ObjectId,
        ref:'users'
    },
    vendorid:{
        type:ObjectId,
        ref:'users'
    },
    qty:{
        type:Number
    },
    total_price:{
        type:Number
    },
    payment_status:{
        type:String
    },
    timestamp:{
        type:String,
        default:Date.now
    }
})
module.exports=mongoose.model("Order",OrderSchema)
