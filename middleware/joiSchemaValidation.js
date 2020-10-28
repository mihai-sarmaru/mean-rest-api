const Joi = require('joi');
const constants = require('../constants/constants');

const validateObjectSchema = (dataObject, schema) => {
    const result = schema.validate(dataObject, {convert: false});

    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            }
        });
        console.log('Validation: ', errorDetails);
        return errorDetails;
    }

    return null;
}

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        const response = { ...constants.defaultServerResponse };
        const error = validateObjectSchema(req.body, schema);
        if (error) {
            response.body = error;
            response.message = constants.validationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}