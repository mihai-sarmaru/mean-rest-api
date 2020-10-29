const User = require('../model/user');
const constants = require('../constants/constants');

module.exports.signup = async ({email, password}) => { //<-- destructure
    try{
        // check if user exists
        const user = await User.findOne({email: email});
        if (user) {
            throw new Error(constants.userMessage.USER_EXISTS);
        }
    } catch (error) {
        console.log('Something went wrong: Service: updateProduct', error);
        throw new Error(error);
    }

}