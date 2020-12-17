/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 03:38:38
 * @modify date 2020-12-17 13:11:31
 * @desc [description]
 */

const Inventory = require("../models/Inventory");
const HttpError = require("../HttpError");
const {inventoryValidation} = require("../validators/validate");
const printTable = require("../utils/printTable");

// @desc - Controller for Creating a new inventory
const addInventory = async (req, res, next) => {

    const {error} = inventoryValidation(req.body);

    if(error){
        return res.status(400)
                .json({
                    error : error.details[0].message
                })
    }

    const newInventory = new Inventory({
        name : req.body.name,
        description : req.body.description,
        quantity: req.body.quantity,
        selling_price : req.body.selling_price,
        status : req.body.status,
        vendor : req.body.vendor,
        weight: req.body.weight,
        onsite: req.body.onsite
    })

    newInventory.save()
        .then( response => {
            console.log(response);
            return res.status(201)
                .json({
                    message : `${req.body.name} successfully added to inventory !`,
                    data : response
                })
        })
}

// @desc - Controller for Fetching/Reading all inventories
const getAllInventories = async (req, res, next) => {
    Inventory.find()
    .then( response => {
        console.log(response);
        return res.status(200)
                .json({
                    message : response ? `${response.length} Inventory(ies) successfully fetched !` : "No Inventories found !",
                    data : response
                })
    })

}

module.exports.addInventory = addInventory;
module.exports.getAllInventories = getAllInventories;