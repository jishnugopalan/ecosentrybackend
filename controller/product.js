var Product=require('../model/product')
const { ObjectId } = require('mongodb');

exports.addUser=(req,res)=>{
    console.log(req.body)
    req.body.shopid=ObjectId(req.body.shopid)
    let product=Product(req.body)
    product.save((err,newUser)=>{
        if(err){
        return res.status(404).json({error:"Error in inserting data"})
        }
        else{
            return res.status(201).json(newUser)
        }
    })


   
}