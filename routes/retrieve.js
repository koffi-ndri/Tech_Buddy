const express = require('express');
const {retrieveImagesController} = require('../controllers/retrieveImagesController');
const {retrieveVideosController} = require('../controllers/retrieveVideosController');
const router = express.Router();

router.use(express.json());

router.get('/images', retrieveImagesController);
router.get('/videos', retrieveVideosController);

module.exports = router;