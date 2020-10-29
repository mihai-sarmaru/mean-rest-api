const constants = require('../constants/constants');
const userService = require('../service/userService');

module.exports.signup = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const serviceResponse = await userService.signup(req.body);

        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong: Controller: signup', error);
        response.message = error.message;
    }
    // return response
    return res.status(response.status).send(response);
}