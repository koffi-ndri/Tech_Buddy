const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const {uploadImage, uploadVideo} = require('./utils/multer');
const {verifyAccess} = require('./utils/verifyToken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const authenticationRoute = require('./routes/auth');
const uploadSingleAssetRoute = require('./routes/single');
const uploadMultipleAssetsRoute = require('./routes/multiple');
const retrieveAssetsRoute = require('./routes/retrieve');

const app = express();

// view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'pug');

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

 app.use('/', indexRouter);
// app.use('/users', usersRouter);

//route middlewares

app.use('/api/auth', authenticationRoute);
app.use('/api/single', verifyAccess, uploadSingleAssetRoute);
app.use('/api/multiple', verifyAccess, uploadMultipleAssetsRoute);
app.use('/api/retrieve', verifyAccess, retrieveAssetsRoute);


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
