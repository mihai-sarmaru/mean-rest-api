const Product = require('../model/product');

module.exports.createProduct = async (productData) => {
    try {
        // destructure
        let product = new Product({ ...productData });
        const result = await product.save();
        return result.toObject();
    } catch (error) {
        console.log('Something went wrong: Service: createProduct', error);
        throw new Error(error);
    }
}