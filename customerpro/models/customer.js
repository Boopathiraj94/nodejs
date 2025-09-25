const mongoose = require("mongoose")

 const customerSchema =   new mongoose.Schema({
     name: String,
     age: Number,
     address: String,
     email:String
   })

   module.exports = mongoose.model("customer",customerSchema);

