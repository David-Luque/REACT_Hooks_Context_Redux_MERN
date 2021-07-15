//Routes to authentication
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

//route to autorice user
router.post('/',
    [
        check('email', "Select a valid email").isEmail(),
        check('password', "Password must be at least 6 characters long").isLength({ min: 6 })
    ],
    authController.authenticateUser
)

module.exports = router;