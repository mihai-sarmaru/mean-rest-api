const User = require('../model/user');
const {formatMongoData} = require('../utils/dbHelper')
const constants = require('../constants/constants');
const bcrypt = require('bcrypt');

module.exports.signup = async ({email, password}) => { //<-- destructure
    try{
        // check if user exists
        const user = await User.findOne({email: email});
        if (user) {
            throw new Error(constants.userMessage.USER_EXISTS);
        }

        // hash password
        password = await bcrypt.hash(password, constants.bcrypt.DEFAULT_RECOMMENDED_SALT_ROUND);

        const newUser = new User({email: email, password: password});
        let result = await newUser.save();
        return formatMongoData(result);

    } catch (error) {
        console.log('Something went wrong: Service: updateProduct', error);
        throw new Error(error);
    }

}