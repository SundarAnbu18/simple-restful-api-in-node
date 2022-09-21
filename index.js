const express=require('express')
const app=express()
const subschema=require('./model/sub')
app.use(express.json())

const rout=require('./routes/sub')
const mongoose=require('mongoose')

app.use('/sub',rout)

mongoose.connect('mongodb://localhost:27017/test',(err)=>{
    if(!err){
        console.log('db is connected')
    }
    else{
        console.log('could not connect sorry'.err)
    }
})
const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('db is connected at'))



app.listen(3000,()=>{
    console.log('Server is live now!!')
})