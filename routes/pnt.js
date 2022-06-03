const express = require('express')

const painters= require('../models/painter')
const router= express.Router()

router.get('/allPnt',async (req,res)=>{
   let pnt = await painters.find()
   res.send(pnt)
})
router.post('/addCst',async (req,res)=>{
    let pnt = new constructors()
    pnt.full_name=req.body.full_name
    pnt.email= req.body.email
    pnt.field= req.body.field
    pnt.birth= req.body.birth
    pnt.city= req.body.city
    req.avatar= req.body.avatar
    try{
       await pnt.save()
       res.send(pnt)
    } 
    catch (error){
       res.send(error)
    }

})




module.exports=router