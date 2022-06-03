 const express = require('express')

 const constructors= require('../models/constructor')
 const router= express.Router()

 router.get('/allCst',async (req,res)=>{
    let cst = await constructors.find()
    res.send(cst)
 })
 router.post('/addCst',async (req,res)=>{
     let cst = new constructors()
     cst.full_name=req.body.full_name
     cst.email= req.body.email
     cst.field= req.body.field
     cst.birth= req.body.birth
     cst.city= req.body.city
     req.avatar= req.body.avatar
     try{
        await cst.save()
        res.send(cst)
     } 
     catch (error){
        res.send(error)
     }

 })




 module.exports=router