const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const comments = require('./routes/Cmt')
const Constructors = require('./routes/Cst')
const Painters = require('./routes/pnt')
const Workers = require('./routes/Wrk')




app.use(express.json())
app.use(cors())
app.use('/comments',comments)
app.use('/constructors',Constructors)
app.use('/painters',Painters)
app.use('/workers',Workers)







app.get('/',(req,res)=>{
    res.send("hello word")
})
mongoose.connect("mongodb+srv://maher1:JdgYp3jKmrqnpVR0@cluster0.t3eu6du.mongodb.net/?retryWrites=true&w=majority")
       .then(()=>{
           console.log('app connected')
       })
       .catch((error)=>{
           console.log(error)
       })











app.listen(3500,()=>{
 console.log("app runing on localhost")
})