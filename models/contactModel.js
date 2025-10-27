const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true , "Please enter the name"]
        
    },
    phone: {
        type: String,
        required : [true , "Please enter the phone"]
        
    },
    email: {
        type: String,
        required : [true , "Please enter the email"]
        
    },
    message: {
        type: String,
        required : [true , "Please enter the message"]
        
    },
    
  
    createdAt : {
      type: Date,
      default : new Date 
    }
})

module.exports = new mongoose.model('Contact', contactSchema); 