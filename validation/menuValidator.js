const Joi = require('joi');

const MenuSchema = {
    create: Joi.object().keys({
        nameOfFood:Joi.string().required(),
        cost: Joi.number().required(),
        publishedDate:Joi.boolean().required(),
    })
}

module.exports = MenuSchema;