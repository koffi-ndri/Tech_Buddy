const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {uploadImage, uploadVideo} = require('./utils/multer');
const bodyParser = require('body-parser');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const uploadSingleImageRouter = require('./routes/image/upload/single');
const uploadSingleVideoRouter = require('./routes/video/upload/single');
const uploadMultipleImageRouter = require('./routes/image/upload/multiple');
const uploadMultipleVideoRouter = require('./routes/video/upload/multiple');
const retrieveImagesRouter = require('./routes/image/retrieve/images');
const retrieveVideosRouter = require('./routes/video/retrieve/videos');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//routers

app.use('/api/singleImage', uploadImage.single('image'), uploadSingleImageRouter);
app.use('/api/singleVideo', uploadVideo.single('video'),uploadSingleVideoRouter);
app.use('/api/multipleImages', uploadImage.array('images'), uploadMultipleImageRouter);
app.use('/api/multipleVideos', uploadVideo.array('videos'),uploadMultipleVideoRouter);
app.use('/api/retrieveImages', retrieveImagesRouter);
app.use('/api/retrieveVideos', retrieveVideosRouter);

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
