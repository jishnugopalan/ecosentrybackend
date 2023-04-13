var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var OrderSchema=mongoose.Schema({
    product:{
        type:ObjectId,
        ref:'Product'
    },
    user:{
        type:ObjectId,
        ref:'User'
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
    order_status:{
        type:String
    },
    delevery_option:{
        type:String
    },
    timestamp:{
        type:String,
        default:Date.now
    }
})
module.exports=mongoose.model("Order",OrderSchema)
