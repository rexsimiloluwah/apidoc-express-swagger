/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 03:38:21
 * @modify date 2020-12-17 11:30:59
 * @desc [description]
 */

 const mongoose = require("mongoose")

 const InventorySchema = new mongoose.Schema({
     name : {
         type : String,
         required : true,
         trim : true
     },

     description : {
         type : String,
         required : true,
         trim : true
     },
     
     quantity : {
         type : Number,
         required : true
     },

     selling_price : {
         type : Number,
         required : true
     },

     status : {
         type : String,
         required : true,
         enum : ['In Stock', 'Unavailable', 'Delivered']
     },

     vendor : {
         type : String
     },

     weight : {
         type : Number,
         required : true
     }

 })

 module.exports = mongoose.model('inventory', InventorySchema);