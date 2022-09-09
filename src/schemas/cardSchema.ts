import joi from "joi";

const cardSchema = joi.object({
    title: joi.string().required(),
    name: joi.string().required(),
    number: joi.string().required(),
    cvc: joi.number().min(3).max(3).required(),
    expiration_date: joi.string().required(),
    password: joi.string().required(),
    is_virtual: joi.boolean().required(),
    type:joi.string().valid("credito","debito","ambos").required()
})

export default cardSchema;