const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true,

    },
    subdate:{
        type:Date,
        required:true,
        default:Date.now
    }

})

module.exports=mongoose.model('test',schema)