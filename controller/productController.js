const productService = require('../service/productService');

module.exports.createProduct = async (req, res) => {
    let response = {};
    try {
        console.log('Request OBJ: ', req.body);
        const serviceResponse = await productService.createProduct(req.body);

        response.status = 200;
        response.message = 'Product created successfully';
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong: Controller: createProduct', error);

        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    // return response
    return res.status(response.status).send(response);
}