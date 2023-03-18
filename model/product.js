var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var productSchema=mongoose.Schema({

    shopid:{
        type: ObjectId,
        required: true,
    },   
    productname:{
        type:String,
        required: true,
    },
    categoryid:{
        type: ObjectId,
        required: true,
    },
    subcategoryid:{
        type: ObjectId,
        required: true,
    },
    brand:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    stock:{
        type:Number,
        required: true,
    },
    Image:{
        type:String,
        required: true,
    },
    Description:{
        type:String,
        required: true,
    }
})
module.exports=mongoose.model("Product",productSchema);