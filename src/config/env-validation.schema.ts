import * as Joi from 'joi';

export const validationSchema = Joi.object({
  DB_URI: Joi.string().required(),
});
