const express = require('express');
const {singleImageController} = require('../../../controllers/singleImageController');

const router = express.Router();

router.use(express.json());

router.post("/", singleImageController);

module.exports = router;