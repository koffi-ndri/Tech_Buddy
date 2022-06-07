const express = require('express');
const router = express.Router();
const {loginController} = require('../controllers/loginController');
const {registerUserController} = require('../controllers/registerUserController');

router.post('/register', registerUserController);
router.post('/login', loginController);


module.exports = router;