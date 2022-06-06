const mongoose  = require("mongoose");
 const Schema= mongoose.Schema;
 const PainterSchema= new Schema({
    full_name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
     
      field: {
        type: String,
        required: true
      },
      birth: {
        type: Date,
      },
      
      city: {
        type: String,
        required:true
      },
      avatar: {
        type: String,
        default:"https://avatars.githubusercontent.com/u/1?v=4"
    
      },
      created_at: {
        type: Date,
        default: Date.now
      }
 })
 const Painter= mongoose.model('painter',PainterSchema);
 module.exports=Painter;