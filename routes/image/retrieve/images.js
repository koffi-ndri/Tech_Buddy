const express = require('express');
const {retrieveImagesController} = require('../../../controllers/retrieveImagesController');
const router = express.Router();

router.use(express.json());

router.get('/', retrieveImagesController);

module.exports = router;