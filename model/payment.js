var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var paymentSchema=mongoose.Schema({
    orderid:{
        type:ObjectId,
        ref:'orders'

    },
    payment_status:{
        type:String
    },
    timestamp:{
        type:String,
        default:Date.now
    }
})
module.exports=mongoose.model("Payment",paymentSchema)
