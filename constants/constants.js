module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
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
        USER_EXISTS: 'Signup email already exists'
    },
    validationMessage: {
        BAD_REQUEST: 'Invalid Fields'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid ID'
    }
}