const  express = require('express');
const upload = require('./utils/multer');
//const cloudinary = require('./cloudinary');
const bodyParser = require('body-parser');
const path = require('path');

const uploadSingleImageRouter = require('./routes/image/upload/single');
const uploadMultipleImageRouter = require('./routes/image/upload/multiple');
const retrieveImages = require('./routes/image/retrieve/images');
const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routers
app.use('/api', upload.array('image'), uploadMultipleImageRouter);
app.use('/api', upload.single('image'), uploadSingleImageRouter);
app.use('/api', retrieveImages);

module.exports = app;