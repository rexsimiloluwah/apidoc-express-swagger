/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 03:38:38
 * @modify date 2020-12-17 13:52:32
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
        .catch(err => {
            console.error(err);
            next(new HttpError(err, 500));
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
    .catch(err => {
        console.error(err);
        next(new HttpError(err, 500));
    })

}

// @desc - Controller for Fetching Inventory by id 
const getInventoryById = async (req, res, next) => {
    const inventoryId = req.params.id;

    Inventory.findById(inventoryId)
        .then(response => {
            console.log(response);
            if(response){
                return res.status(200)
                        .json({
                            "message" : `Successfully fetched inventory for id - ${inventoryId}`,
                            "inventory" : response
                        })
            }

        })
        .catch(err => {
            console.error(err);
            return next(new HttpError(`Could not find inventory for id - ${inventoryId}`, 404));
        })
}

// @desc - Controller for Updating Inventory by id
const updateInventoryById = async (req, res, next) => {

    const inventoryId = req.params.id;

    let inventory;
    try{
        inventory = await Inventory.findById(inventoryId);
    }
    catch(err){
        console.error(err);
        return next(new HttpError(`Could not find inventory for id - ${inventoryId}`))
    }

    for (const property in req.body){
        inventory[property] = req.body[property]
    }

    inventory.save()
        .then(response => {
            console.log(response);
            return res.status(200)
                    .json({
                        "message" : `Successfully updated inventory with id - ${inventoryId}`,
                        "data" : response
                    })
        })
        .catch(err => {
            console.error(err);
            return next(new HttpError(err, 500));
        })
}

module.exports.addInventory = addInventory;
module.exports.getAllInventories = getAllInventories;
module.exports.getInventoryById = getInventoryById;
module.exports.updateInventoryById = updateInventoryById;