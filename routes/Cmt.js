const express= require('express')
const comment= require('../models/Comment')
const  router= express.Router()



router.get('/a',(req,res)=>{
    res.send('m working perfectly')
})
router.get('/allC',async (req,res)=>{
    let cmt =await comment.find()
    res.send(cmt)
})
router.post('/addC',async (req,res)=>{
    let cmt = new comment()
    cmt.description=req.body.description
    cmt.ComentedBy=req.body.ComentedBy
    try{
        await cmt.save()
        res.send(cmt)

    }
    catch (error){
        res.send(error)
    }

})


module.exports=router