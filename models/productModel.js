const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true , "Please enter the name"]
        
    },
    description: {
        type: String,
        required : [true , "Please enter the description"]
    },


    price: {
        type: Number,
        required: [true , "Please enter the price"]
    },
    ratings: {
        type: Number,
        required : [true , "Please enter the rating"]
    },
    stock: {
        type: Number,
        required : [true , "Please enter the stock"]
    },
    image: { type: [String], required: true },


  sizes: [
        {
            size: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1 // Default quantity for the size
            }
        }
    ],
     

    category : {
        type: String,
        required : [true , "Please enter the category"]
    },
   
  
    numOfReviews: {
        type: Number,
        default:0
    },
    reviews: [
        {
            user: {
                type : mongoose.Schema.ObjectId,
                ref : "User",
            },
            name:{
                type: String,
                required: true
            },
            rating : {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required: true
    },
    
    createdAt : {
      type: Date,
      default : new Date 
    }
})

module.exports = new mongoose.model('Product', productSchema); 