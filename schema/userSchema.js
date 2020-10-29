const Joi = require('joi');

module.exports.signupSchema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
});