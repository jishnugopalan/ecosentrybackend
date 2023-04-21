var Land=require('../model/land')
const { ObjectId } = require('mongodb');
var LandConncet=require("../model/landconnect")

exports.addLand=(req,res)=>{
    console.log(req.body)
    req.body.user=ObjectId(req.body.user)
    let newLand=Land(req.body)
    newLand.save((err,newUser)=>{
        if(err){
        return res.status(404).json({error:err})
        }
        else{
            return res.status(201).json(newUser)
        }
    })
}
exports.viewAllLand=(req,res)=>{
    Land.find({}).exec((err,land)=>{
        if(err)
        return res.status(404).json({error:"Error in fetching data"})
        else if(land)
        return res.status(201).json(land)
    })
}
exports.viewLand=(req,res)=>{
    console.log(req.body)
    Land.findOne({_id:req.body.landid}).populate("user").exec((err,land)=>{
        if(err){
            console.log("in err")
            return res.status(404).json({error:"Error in fetching data"})
        }
       
        else if(land){
            console.log("in land")
            return res.status(201).json(land)
        }
       
    })
}
exports.connectLand=(req,res)=>{
    LandConncet.findOne({user:ObjectId(req.body.user),land:ObjectId(req.body.land)},(err,land)=>{
        if(err)
        return res.status(404).json({error:"Error in fetching data"})
        else if(land)
        return res.status(405).json({msg:"Request already sent"})
        else{
            let newLandConnect=LandConncet(req.body)
            newLandConnect.save((err,landconnect)=>{
                if(err)
                return res.status(404).json({error:"Error in fetching data"})
                else if(landconnect)
                return res.status(201).json(landconnect)
            })
        }
    })

}
exports.viewLandByLandOwner=(req,res)=>{
    Land.find({user:ObjectId(req.body.user)},(err,land)=>{
        if(err)
        return res.status(404).json({error:"Error in fetching data"})
        else if(land)
        return res.status(201).json(land)
    })
}
exports.viewLandConnectByLandOwner=(req,res)=>{
    console.log(req.body)
    LandConncet.find({land:ObjectId(req.body.landid)}).populate("user").exec((err,landconnect)=>{
        if(err)
        return res.status(404).json({error:err})
        else if(landconnect)
        return res.status(201).json(landconnect)
    })
}
exports.updateLandConnectStatus=(req,res)=>{
    LandConncet.updateOne({_id:ObjectId(req.body.connectionid)},{
        $set:{
            status:req.body.status
        }
    }).exec((err,landupd)=>{
        if(err)
        return res.status(404).json({error:"Error in fetching data"})
        else if(landupd)
        return res.status(201).json({msg:"Status Updated"})
    })
}

exports.viewLandConnectByCustomer=(req,res)=>{
    LandConncet.find({user:ObjectId(req.body.userid),status:"accepted"}).populate("land").exec((err,landconnect)=>{
        if(err)
        return res.status(404).json({error:"Error in fetching data"})
        else if(landconnect)
        return res.status(201).json(landconnect)
    })
}
