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

module.exports.getAllProducts = async () => {
    try {
        let products = await Product.find({});
        return products;
        // return result.toObject();
    } catch (error) {
        console.log('Something went wrong: Service: getAllProducts', error);
        throw new Error(error);
    }
}