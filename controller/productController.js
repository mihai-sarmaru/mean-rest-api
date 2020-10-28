const productService = require('../service/productService');
const constants = require('../constants/constants');

module.exports.createProduct = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        console.log('Request OBJ: ', req.body);
        const serviceResponse = await productService.createProduct(req.body);

        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong: Controller: createProduct', error);
        response.message = error.message;
    }
    // return response
    return res.status(response.status).send(response);
}