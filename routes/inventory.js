/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 12:04:58
 * @modify date 2020-12-17 12:19:18
 * @desc [description]
 */

 const express = require("express");
 const router = express.Router();

 const {addInventory} = require("../controllers/inventory");

 // @desc Create a New Inventory product 
 // @route POST / 

 router.post("/", addInventory);