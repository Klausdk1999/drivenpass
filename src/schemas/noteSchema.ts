import joi from "joi";

const noteSchema = joi.object({

    title:joi.string().required(),
    anotation:joi.string().required()
})

export default noteSchema;