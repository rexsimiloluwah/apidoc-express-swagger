/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 12:04:58
 * @modify date 2020-12-17 13:48:44
 * @desc [description]
 */

 const express = require("express");
 const router = express.Router();

 const {addInventory, getAllInventories, getInventoryById, updateInventoryById} = require("../controllers/inventory");

 // @desc Create a New Inventory product 
 // @route POST / 

 router.post("/", addInventory);

 // @desc Get all Inventories 
 // @route GET /
 router.get("/", getAllInventories);

 // @desc Get Inventory by Id
 // @route GET /id
 router.get("/:id", getInventoryById);

 // @desc Update Inventory by Id
 // @route PUT /id
 router.put("/:id", updateInventoryById);


 module.exports = router;