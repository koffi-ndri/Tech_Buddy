const express = require('express');
const {singleVideoController} = require('../../../controllers/singleVideoController');
const router = express.Router();

router.use(express.json());

router.post("/", singleVideoController);

module.exports = router;