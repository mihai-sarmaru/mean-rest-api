const Product = require('../model/product');
const {formatMongoData, checkObjectId} = require('../utils/dbHelper')
const constants = require('../constants/constants');

module.exports.createProduct = async (productData) => {
    try {
        // destructure
        let product = new Product({ ...productData });
        const result = await product.save();
        return formatMongoData(result);
    } catch (error) {
        console.log('Something went wrong: Service: createProduct', error);
        throw new Error(error);
    }
}

module.exports.getAllProducts = async ({skip = 0, limit = 10}) => { // <-- destructured params
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(products);
    } catch (error) {
        console.log('Something went wrong: Service: getAllProducts', error);
        throw new Error(error);
    }
}

module.exports.getProductById = async ({id}) => { // <-- destructured params
    try {
        // check if object id is valid
        checkObjectId(id);

        let product = await Product.findById(id);
        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error) {
        console.log('Something went wrong: Service: getProductById', error);
        throw new Error(error);
    }
}