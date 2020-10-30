const constants = require('../constants/constants');
const jwt = require('jsonwebtoken');

module.exports.validateToken = (req, res, next) => {
    let response = {...constants.defaultServerResponse};
    try {
        if (!req.headers.authorization) {
            throw new Error(constants.validationMessage.NO_TOKEN);
        }

        // get web token from header and verify
        const token = req.headers.authorization.split('Bearer')[1].trim();
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY || 'my-secret-jwt-key');
        return next();
    } catch (error) {
        response.status = 401;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}