const Product = require('../model/product');
const {formatMongoData} = require('../utils/dbHelper')

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