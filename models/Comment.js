 const mongoose = require('mongoose')
 const Schema= mongoose.Schema;
 const CommentSchema=  new Schema({
     description:{
         type: String,
         required : true
     },
     ComentedBy:{
         type:String,
         required: true
     },
     Comented_At: {
        type:Date,
        default: Date.now
     }
    

 })
 const Comment = mongoose.model('comment',CommentSchema)
 module.exports= Comment;
 