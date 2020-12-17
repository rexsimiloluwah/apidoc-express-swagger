/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 12:04:58
 * @modify date 2020-12-17 13:01:53
 * @desc [description]
 */

 const express = require("express");
 const router = express.Router();

 const {addInventory, getAllInventories} = require("../controllers/inventory");

 // @desc Create a New Inventory product 
 // @route POST / 

 router.post("/", addInventory);

 router.get("/", getAllInventories);

 module.exports = router;