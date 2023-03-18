var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var customerSchema=mongoose.Schema({

    customerid:{
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
    alternatephone:{
        type:Number,
        required: true,
    }
    
})
module.exports=mongoose.model("Customer",customerSchema);