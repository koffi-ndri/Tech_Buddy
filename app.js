const  express = require('express');
const {uploadImage, uploadVideo} = require('./utils/multer');
//const cloudinary = require('./cloudinary');
const bodyParser = require('body-parser');
const path = require('path');

const uploadSingleImageRouter = require('./routes/image/upload/single');
const uploadSingleVideoRouter = require('./routes/video/upload/single');
const uploadMultipleImageRouter = require('./routes/image/upload/multiple');
const uploadMultipleVideoRouter = require('./routes/video/upload/multiple');
const retrieveImages = require('./routes/image/retrieve/images');
const app = express();

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

//routers

app.use('/api/singleImage', uploadImage.single('image'), uploadSingleImageRouter);
app.use('/api/singleVideo', uploadVideo.single('video'),uploadSingleVideoRouter);
app.use('/api/multipleImages', uploadImage.array('images'), uploadMultipleImageRouter);
app.use('/api/multipleVideos', uploadVideo.array('videos'),uploadMultipleVideoRouter);
app.use('/api/retrieveImages', retrieveImages);

module.exports = app;