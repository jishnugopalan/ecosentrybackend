var Land=require('../model/land')
const { ObjectId } = require('mongodb');

exports.addUser=(req,res)=>{
    console.log(req.body)
    req.body.landholderid=ObjectId(req.body.landholderid)
    let newLand=Land(req.body)
    newLand.save((err,newUser)=>{
        if(err){
        return res.status(404).json({error:"Error in inserting data"})
        }
        else{
            return res.status(201).json(newUser)
        }
    })


   
}