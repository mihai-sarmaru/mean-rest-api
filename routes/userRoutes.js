const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const userSchema = require('../schema/userSchema');

router.post('/signup',
    joiSchemaValidation.validateBody(userSchema.signupSchema),
    userController.signup);

router.post('/login',
    joiSchemaValidation.validateBody(userSchema.loginSchema),
    userController.login);

module.exports = router;