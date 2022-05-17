const  express = require('express');
const upload = require('./utils/multer');
//const cloudinary = require('./cloudinary');
const bodyParser = require('body-parser');
const path = require('path');

const uploadMultipleImageRouter = require('./routes/image/upload/multiple');

const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', upload.array('image'), uploadMultipleImageRouter);


module.exports = app;