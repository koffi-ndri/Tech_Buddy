const express = require('express');
const cloudinary = require('../../../utils/cloudinary');
const fs = require('fs');
const router = express.Router();

router.use(express.json());

router.post("/uploadImages", async(req, res)=>{
    const uploader = async (path) => await cloudinary.uploads(path, 'Images');

    const urls = [];
    const files = req.files;

    for(const file of files){
        const {path} = file;
        const newPath = await uploader(path);

        urls.push(newPath);
        fs.unlinkSync(path);
        res.status(200).json({
            message: 'Image Uploaded Successfully',
            data: urls
        });
    }
});

module.exports = router;