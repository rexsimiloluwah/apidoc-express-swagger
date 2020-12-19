/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 12:04:58
 * @modify date 2020-12-17 14:00:36
 * @desc [description]
 */

 const express = require("express");
 const router = express.Router();

 const {addInventory, getAllInventories, getInventoryById, updateInventoryById, deleteInventoryById} = require("../controllers/inventory");

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

// @desc Delete Inventory by Id
// @route DELETE /id
router.delete("/:id", deleteInventoryById);

 module.exports = router;