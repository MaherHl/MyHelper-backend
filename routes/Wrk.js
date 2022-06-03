const express = require('express')
const worker = require('../models/whWorker')
const router=express.Router()
router.get('/allWrk',async (req,res)=>{
 let wrk =  await worker.find()
 res.send(wrk)
    
})
router.post('/addwrk',async (req,res)=>{
    let wrk = new worker()
    wrk.full_name=req.body.full_name
    wrk.email= req.body.email
    wrk.field= req.body.field
    wrk.birth= req.body.birth
    wrk.city= req.body.city
    req.avatar= req.body.avatar
    try{
       await wrk.save()
       res.send(wrk)
    } 
    catch (error){
       res.send(error)
    }

})






module.exports=router