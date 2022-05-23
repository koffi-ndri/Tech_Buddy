const express = require('express');
const {multipleVideoController} = require('../../../controllers/multipleVideoController');
const router = express.Router();

router.use(express.json());

router.post("/", multipleVideoController);

module.exports = router;