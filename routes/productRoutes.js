const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../schema/productSchema');

router.post('/',
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct);

router.get('/',
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductsSchema),
    productController.getAllProducts);

router.get('/:id', productController.getProductById);

router.put('/:id',
    joiSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.updateProduct);

module.exports = router;