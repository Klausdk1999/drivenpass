import Joi from "joi";

export const memeSchema = Joi.object({
  url: Joi.string().uri().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});
