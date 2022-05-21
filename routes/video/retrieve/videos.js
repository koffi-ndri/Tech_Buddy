const express = require('express');
const {retrieveVideosController} = require('../../../controllers/retrieveVideosController');
const router = express.Router();

router.use(express.json());

router.get('/', retrieveVideosController);

module.exports = router;