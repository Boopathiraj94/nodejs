const mongoose = require("mongoose")

 const products =  new mongoose.Schema({
   productName: String, 
   price: Number, 
   stock: Number, 
   description: String, 
   category: String, 
   offerPrice: Number, 
})

module.exports = mongoose.model("product",products)