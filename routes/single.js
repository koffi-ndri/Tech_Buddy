const express = require('express');
const {uploadImage, uploadVideo} = require('../utils/multer');
const {singleImageController} = require('../controllers/singleImageController');
const {singleVideoController} = require('../controllers/singleVideoController');

const router = express.Router();

router.use(express.json());

router.post("/imageUpload", uploadImage.single('image'), singleImageController);
router.post("/videoUpload", uploadVideo.single('video'), singleVideoController);

module.exports = router;