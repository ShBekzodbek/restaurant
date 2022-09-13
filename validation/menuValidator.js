const Joi = require('joi');

const MenuSchema = {
    create: Joi.object().keys({
        nameOfFood:Joi.string().required(),
        cost: Joi.number().required(),
        isPublished:Joi.boolean().required(),
    })
}

module.exports = MenuSchema;