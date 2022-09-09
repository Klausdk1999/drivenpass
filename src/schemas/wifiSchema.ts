import joi from "joi";

const wifiSchema = joi.object({

    url:joi.string().uri().required(),
    name:joi.string().required(),
    password:joi.string().required(),
    network:joi.string().required()
})

export default wifiSchema;