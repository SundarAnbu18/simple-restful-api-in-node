const express=require('express')

const route=express.Router()
const submodel=require('../model/sub')
//To get all the data

route.get('/',async (req,res)=>{
    try{
        const subdata=await submodel.find()
        res.send(subdata)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

//To get the singe data

route.get('/:id',getsub,(req,res)=>{
    res.json(res.subscriber)
})

//To create a data
route.post('/',async(req,res)=>{
    const subscriber=new submodel({
        name:req.body.name,
        sub:req.body.sub
    })
    try{
        const savesub=await subscriber.save()
        res.send(savesub)
        console.log(savesub)
    }catch(err){
        console.log('wrong data')
    }
})

//To update data
route.patch('/:id',getsub,async(req,res)=>{
    if(req.body.name !=null){
        res.subscriber.name=req.body.name
    }
    if(req.body.sub !=null){
        res.subscriber.sub=req.body.sub
    }
    try{

        const updatesubscr=await res.subscriber.save()
        res.json(updatesubscr)
    }catch(err){

    }
})

//To delete data

route.delete('/:id',getsub,async(req,res)=>{
    try{
        await res.subscriber.remove()
        res.json({message:'Deleted successfully'})
    }
    catch(err){

    }
})

async function getsub(req,res,next){
    let subscriber
    try{
        subscriber=await submodel.findById(req.params.id)
        if(subscriber == null){
            return res.json({message:'cannot found'})
        }

    }
    catch(err){
        return res.json({message:err.message})
    }
    res.subscriber=subscriber
    next()
}



module.exports=route