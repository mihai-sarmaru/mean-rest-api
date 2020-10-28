const productService = require('../service/productService');

module.exports.createProduct = (req, res) => {
    console.log('=== ', req.body);
    productService.createProduct(req.body);
}