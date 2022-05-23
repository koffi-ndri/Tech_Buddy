const express = require('express');
const {multipleImagesController} = require('../../../controllers/multipleImagesController');
const router = express.Router();

router.use(express.json());

router.post("/", multipleImagesController);

module.exports = router;