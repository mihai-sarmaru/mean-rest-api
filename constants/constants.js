module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    bcrypt: {
        DEFAULT_RECOMMENDED_SALT_ROUND: 12
    },
    productMessage: {
        PRODUCT_CREATED: 'Product created successfully',
        PRODUCT_FETCHED: 'Product fetched successfully',
        PRODUCT_NOT_FOUND: 'Product not found',
        PRODUCT_UPDATED: 'Product updated successfully',
        PRODUCT_DELETED: 'Product deleted successfully'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signed up successfully',
        LOGIN_SUCCESS: 'Logged in successfully',
        USER_EXISTS: 'Signup email already exists',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Incorrect password'
    },
    validationMessage: {
        BAD_REQUEST: 'Invalid Fields',
        NO_TOKEN: 'Token is missing from header'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid ID'
    }
}