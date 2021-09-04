const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Add valid email').isEmail(),
        check('password', 'Password must be at least 6 character long').isLength({ min: 6 })
    ],
    userController.createUser
);


module.exports = router;