const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const comments = require('./routes/Cmt')
const Constructors = require('./routes/Cst')
const Painters = require('./routes/pnt')
const Workers = require('./routes/Wrk')
 const AdminBro = require('admin-bro')
 const adminRouter = require ('./routes/admin.router')


app.use(express.json())
app.use(cors())
app.use('/comments',comments)
app.use('/constructors',Constructors)
app.use('/painters',Painters)
app.use('/workers',Workers) 
app.use('/admin',adminRouter)

const MONGO_URL = process.env.MONGO_URL ||"mongodb+srv://maher:12jDH0ZQbE9X7Ox1@cluster0.9ckvcfj.mongodb.net/?retryWrites=true&w=majority"
  const PORT = process.env.PORT || 3500





app.get('/',(req,res)=>{
    res.send("hello word")
})


 
   const run = async()=>{
 
    await mongoose.connect(MONGO_URL,{
        useNewUrlParser: true
    })
        await app.listen(PORT,()=>{
        console.log("app runing on localhost")
       })
   }
    run()
    










