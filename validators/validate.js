const Joi = require("joi");

const inventoryValidation = data => {

    const schema = Joi.object({
        name : Joi.string()
                .required(),

        description : Joi.string()
                        .max(250)
                        .required(),
        
        quantity : Joi.number()
                    .required(),

        selling_price : Joi.number()
                         .required(),
        
        status : Joi.string()
                    .required()
                    .valid("In Stock", "Unavailable", "Delivered"),
        
        vendor : Joi.string(),

        weight : Joi.number()
                    .required(),

        onsite : Join.boolean()
                    .required(),           

    })

    return schema.validate(data);
}

module.exports.inventoryValidation = inventoryValidation;