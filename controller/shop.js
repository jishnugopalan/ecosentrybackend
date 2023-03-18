var Shop=require('../model/shop')
exports.addUser=(req,res)=>{
    console.log(req.body)
    Shop.findOne({shopid:req.body.shopid},(err,user)=>{ //find query
        if(err){
            return res.status(404).json({error:"Error in fetching shopid"})
        }
        else if(user){
            return res.status(404).json({error:"Shop already exist"})
        }
        else{
            let user=new Shop(req.body)
            user.save((err,newUser)=>{
                if(err){
                return res.status(404).json({error:"Error in inserting data"})
                }
                else{
                    return res.status(201).json({newUser})
                }
            })
        }
    })
}