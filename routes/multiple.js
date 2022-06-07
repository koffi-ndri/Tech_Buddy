const express = require('express');
const {uploadImage, uploadVideo} = require('../utils/multer');
const {multipleImagesController} = require('../controllers/multipleImagesController');
const {multipleVideosController} = require('../controllers/multipleVideosController')
const router = express.Router();

router.use(express.json());

router.post("/imagesUpload", uploadImage.array('images'), multipleImagesController);
router.post("/videosUpload", uploadVideo.array('videos'), multipleVideosController);

module.exports = router;