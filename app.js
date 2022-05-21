const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {uploadImage, uploadVideo} = require('./utils/multer');
const {verifyAccess} = require('./utils/verifyToken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const registerUserRoute = require('./routes/authentication/register');
const loginRoute = require('./routes/authentication/login');
const uploadSingleImageRoute = require('./routes/image/upload/single');
const uploadSingleVideoRoute = require('./routes/video/upload/single');
const uploadMultipleImageRoute = require('./routes/image/upload/multiple');
const uploadMultipleVideoRoute = require('./routes/video/upload/multiple');
const retrieveImagesRoute = require('./routes/image/retrieve/images');
const retrieveVideosRoute = require('./routes/video/retrieve/videos');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();

//Connect to database
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () =>{
  console.log("Connected to database");
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//route middlewares
app.use('/api/register', registerUserRoute);
app.use('/api/login', loginRoute);
app.use('/api/singleImage', verifyAccess,uploadImage.single('image'), uploadSingleImageRoute);
app.use('/api/singleVideo', verifyAccess,uploadVideo.single('video'),uploadSingleVideoRoute);
app.use('/api/multipleImages', verifyAccess,uploadImage.array('images'), uploadMultipleImageRoute);
app.use('/api/multipleVideos', verifyAccess,uploadVideo.array('videos'),uploadMultipleVideoRoute);
app.use('/api/retrieveImages', verifyAccess,retrieveImagesRoute);
app.use('/api/retrieveVideos', verifyAccess,retrieveVideosRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
